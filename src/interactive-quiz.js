const { Select } = require("enquirer");

const myQuestions = [
  {
    type: "select",
    name: "question 1",
    message: "What is the capital of France?",
    choices: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: 1,
  },

  {
    type: "select",
    name: "question 2",
    question: "What is the largest planet in our solar system?",
    choices: ["Mercury", "Venus", "Earth", "Jupiter"],
    correctAnswer: 3,
  },

  {
    type: "select",
    name: "question 3",
    question: "Who wrote the famous play 'Hamlet'?",
    choices: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "F. Scott Fitzgerald",
    ],
    correctAnswer: 0,
  },

  {
    type: "select",
    name: "question 4",
    question: "What is the tallest mountain in the world?",
    choices: ["Mount Everest", "K2", "Kilimanjaro", "Mount Fuji"],
    correctAnswer: 0,
  },

  {
    type: "select",
    name: "question 5",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "NaCl", "NH3"],
    correctAnswer: 0,
  },

  {
    type: "select",
    name: "question 6",
    question: "What is the scientific name for a human being?",
    choices: ["Homo Sapiens", "Panthera Leo", "Ursus Arctos", "Canis Lupus"],
    correctAnswer: 0,
  },

  {
    type: "select",
    name: "question 7",
    question: " Which programming language is used to create web pages?",
    choices: ["HTML", "CSS", "JavaScript", "All of the above"],
    correctAnswer: 3,
  },
];

const prompt = new Select(myQuestions[6]);
prompt.run()
async function mainTask() {}

mainTask();
console.log("AFTER mainTask() was called");
