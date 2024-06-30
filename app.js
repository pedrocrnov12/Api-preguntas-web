const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const questionsRouter = require('./questions');

mongoose.connect('mongodb://localhost:27017/exam-platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/api/questions', questionsRouter);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
