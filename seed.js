const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: String,
});

const Question = mongoose.model('Question', questionSchema);

mongoose.connect('mongodb://localhost:27017/exam-platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const questions = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["París", "Londres", "Roma", "Berlín"],
    correctAnswer: "París",
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Amazonas", "Nilo", "Misisipi", "Yangtsé"],
    correctAnswer: "Amazonas",
  },
  {
    question: "¿Quién escribió 'Don Quijote de la Mancha'?",
    options: ["Miguel de Cervantes", "William Shakespeare", "Gabriel García Márquez", "Mario Vargas Llosa"],
    correctAnswer: "Miguel de Cervantes",
  },
  {
    question: "¿En qué año comenzó la Segunda Guerra Mundial?",
    options: ["1939", "1945", "1914", "1929"],
    correctAnswer: "1939",
  },
  {
    question: "¿Cuál es el planeta más grande del sistema solar?",
    options: ["Júpiter", "Saturno", "Tierra", "Marte"],
    correctAnswer: "Júpiter",
  },
  {
    question: "¿Quién pintó 'La última cena'?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "¿Cuál es la lengua más hablada en el mundo?",
    options: ["Mandarín", "Inglés", "Español", "Hindú"],
    correctAnswer: "Mandarín",
  },
  {
    question: "¿Qué elemento químico tiene el símbolo 'O'?",
    options: ["Oxígeno", "Oro", "Osmio", "Oganesón"],
    correctAnswer: "Oxígeno",
  },
  {
    question: "¿Quién fue el primer presidente de los Estados Unidos?",
    options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
    correctAnswer: "George Washington",
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
    options: ["Océano Pacífico", "Océano Atlántico", "Océano Índico", "Océano Ártico"],
    correctAnswer: "Océano Pacífico",
  },
  {
    question: "¿Cuál es la fórmula química del agua?",
    options: ["H2O", "CO2", "O2", "H2"],
    correctAnswer: "H2O",
  },
  {
    question: "¿Quién desarrolló la teoría de la relatividad?",
    options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileo Galilei"],
    correctAnswer: "Albert Einstein",
  },
  {
    question: "¿Cuál es el país más grande del mundo por área?",
    options: ["Rusia", "Canadá", "China", "Estados Unidos"],
    correctAnswer: "Rusia",
  },
  {
    question: "¿Cuál es el órgano más grande del cuerpo humano?",
    options: ["Piel", "Corazón", "Hígado", "Pulmones"],
    correctAnswer: "Piel",
  },
  {
    question: "¿Qué planeta es conocido como el 'Planeta Rojo'?",
    options: ["Marte", "Júpiter", "Saturno", "Venus"],
    correctAnswer: "Marte",
  },
  {
    question: "¿Qué país es famoso por su carnaval en la ciudad de Río de Janeiro?",
    options: ["Brasil", "Argentina", "México", "España"],
    correctAnswer: "Brasil",
  },
  {
    question: "¿En qué año llegó el hombre a la Luna?",
    options: ["1969", "1959", "1979", "1989"],
    correctAnswer: "1969",
  },
  {
    question: "¿Quién escribió 'Cien años de soledad'?",
    options: ["Gabriel García Márquez", "Julio Cortázar", "Mario Vargas Llosa", "Pablo Neruda"],
    correctAnswer: "Gabriel García Márquez",
  },
  {
    question: "¿Cuál es la moneda oficial de Japón?",
    options: ["Yen", "Dólar", "Euro", "Won"],
    correctAnswer: "Yen",
  },
  {
    question: "¿Qué ciudad es conocida como la 'Gran Manzana'?",
    options: ["Nueva York", "Los Ángeles", "Chicago", "San Francisco"],
    correctAnswer: "Nueva York",
  },
  {
    question: "¿Cuál es el idioma oficial de Brasil?",
    options: ["Portugués", "Español", "Inglés", "Francés"],
    correctAnswer: "Portugués",
  },
  {
    question: "¿Quién pintó la 'Mona Lisa'?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "¿Qué inventor es conocido por desarrollar la bombilla eléctrica?",
    options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Isaac Newton"],
    correctAnswer: "Thomas Edison",
  },
  {
    question: "¿Cuál es la capital de Japón?",
    options: ["Tokio", "Kioto", "Osaka", "Hiroshima"],
    correctAnswer: "Tokio",
  },
  {
    question: "¿Qué gas es esencial para la respiración humana?",
    options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Hidrógeno"],
    correctAnswer: "Oxígeno",
  },
  {
    question: "¿Qué país es conocido por su Torre Eiffel?",
    options: ["Francia", "Italia", "España", "Alemania"],
    correctAnswer: "Francia",
  },
  {
    question: "¿Qué océano rodea a Hawái?",
    options: ["Océano Pacífico", "Océano Atlántico", "Océano Índico", "Océano Ártico"],
    correctAnswer: "Océano Pacífico",
  },
  {
    question: "¿Qué planeta tiene un día de 24 horas y 37 minutos?",
    options: ["Marte", "Júpiter", "Saturno", "Venus"],
    correctAnswer: "Marte",
  },
  {
    question: "¿Qué país es conocido por sus tulipanes y molinos de viento?",
    options: ["Países Bajos", "Alemania", "Bélgica", "Suiza"],
    correctAnswer: "Países Bajos",
  },
  {
    question: "¿Cuál es el metal más abundante en la corteza terrestre?",
    options: ["Aluminio", "Hierro", "Cobre", "Oro"],
    correctAnswer: "Aluminio",
  }
];

const seedDB = async () => {
  await Question.deleteMany({});
  await Question.insertMany(questions);
  console.log("Database seeded!");
};

seedDB().then(() => {
  mongoose.connection.close();
});
