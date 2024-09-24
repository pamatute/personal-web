require('dotenv').config({ path: '../.env' });

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

const app = express();

// Imprimir la URI de MongoDB para verificar
console.log('MongoDB URI:', process.env.MONGODB_URI);

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/blog', require('./api/blog'));
app.use('/api/projects', require('./api/projects'));
app.use('/api/users', require('./api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));