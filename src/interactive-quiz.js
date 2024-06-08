const { Select } = require("enquirer");

const questions = [
  {
    type: "select",
    name: "question 1",
    message: "What is the capital of France?",
    choices: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },

  {
    type: "select",
    name: "question 2",
    message: "What is the largest planet in our solar system?",
    choices: ["Mercury", "Venus", "Earth", "Jupiter"],
    correctAnswer: "Jupiter",
  },

  {
    type: "select",
    name: "question 3",
    message: "Who wrote the famous play 'Hamlet'?",
    choices: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "F. Scott Fitzgerald",
    ],
    correctAnswer: "William Shakespeare",
  },

  {
    type: "select",
    name: "question 4",
    message: "What is the tallest mountain in the world?",
    choices: ["Mount Everest", "K2", "Kilimanjaro", "Mount Fuji"],
    correctAnswer: "Mount Everest",
  },

  {
    type: "select",
    name: "question 5",
    message: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "NaCl", "NH3"],
    correctAnswer: "H2O",
  },

  {
    type: "select",
    name: "question 6",
    message: "What is the scientific name for a human being?",
    choices: ["Homo Sapiens", "Panthera Leo", "Ursus Arctos", "Canis Lupus"],
    correctAnswer: "Homo Sapiens",
  },

  {
    type: "select",
    name: "question 7",
    message: " Which programming language is used to create web pages?",
    choices: ["HTML", "CSS", "JavaScript", "All of the above"],
    correctAnswer: "All of the above",
  },
];

async function mainTask() {
  let score = 0; // Initialise score variable
  console.log("Starting Quiz");
  for (const question of questions) {
    const prompt = new Select(question);
    const answer = await prompt.run();
    const isCorrect = answer === question.correctAnswer;

    if (isCorrect) {
      console.log("Correct!");
    } else {
      console.log("Incorrect. The answer is:", question.correctAnswer);
    }

    if (isCorrect) {
      score++;
    }
  }

  console.log(`You got ${score} out of ${questions.length} questions correct.`);
}

mainTask();
