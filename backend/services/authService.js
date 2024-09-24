const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authService = {
  async registerUser(name, email, password) {
    // Verificar si el usuario ya existe
    let user = await User.findOne({ email });
    if (user) {
      throw new Error('El usuario ya existe');
    }

    // Crear nuevo usuario
    user = new User({
      name,
      email,
      password
    });

    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Guardar usuario
    await user.save();

    return { id: user.id, name: user.name, email: user.email };
  },

  async loginUser(email, password) {
    // Verificar si el usuario existe
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    // Verificar contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Credenciales inválidas');
    }

    // Generar JWT
    const payload = {
      user: {
        id: user.id
      }
    };

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  }
};

module.exports = authService;