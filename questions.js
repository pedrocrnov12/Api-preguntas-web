const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: String,
});

const Question = mongoose.model('Question', questionSchema);

// Ruta para obtener 10 preguntas aleatorias
router.get('/', async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 10 } }]);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
