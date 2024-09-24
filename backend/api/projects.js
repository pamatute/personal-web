const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Obtener todos los proyectos
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener un proyecto específico
router.get('/:id', getProject, (req, res) => {
  res.json(res.project);
});

// Middleware para obtener un proyecto por ID
async function getProject(req, res, next) {
  let project;
  try {
    project = await Project.findById(req.params.id);
    if (project == null) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.project = project;
  next();
}

module.exports = router;