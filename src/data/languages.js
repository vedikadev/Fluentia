const languages = {
  spanish: {
    name: "Spanish",
    lessons: [
      {
        id: 1,
        title: "Basics 1",
        questions: [
          {
            question: "What is Hello in Spanish?",
            options: ["Hola", "Adios", "Gracias", "Perro"],
            answer: "Hola",
          },
          {
            question: "What is Thank you?",
            options: ["Gracias", "Hola", "Si", "No"],
            answer: "Gracias",
          },
          {
            question: "What is Please?",
            options: ["Por favor", "Hola", "Gracias", "Adios"],
            answer: "Por favor",
          },
          {
            question: "What is Yes?",
            options: ["Si", "No", "Hola", "Gracias"],
            answer: "Si",
          },
          {
            question: "What is No?",
            options: ["No", "Si", "Hola", "Adios"],
            answer: "No",
          },
        ],
      },

      {
        id: 2,
        title: "Greetings",
        questions: [
          {
            question: "How do you say Good Morning?",
            options: ["Buenos días", "Buenas noches", "Hola", "Gracias"],
            answer: "Buenos días",
          },
          {
            question: "How do you say Good Night?",
            options: ["Buenas noches", "Buenos días", "Hola", "Adios"],
            answer: "Buenas noches",
          },
          {
            question: "What does ¿Cómo estás? mean?",
            options: [
              "How are you?",
              "What is your name?",
              "Where are you?",
              "Goodbye",
            ],
            answer: "How are you?",
          },
        ],
      },
    ],
  },

  french: {
    name: "French",
    lessons: [
      {
        id: 1,
        title: "Basics 1",
        questions: [
          {
            question: "What is Hello in French?",
            options: ["Bonjour", "Merci", "Oui", "Non"],
            answer: "Bonjour",
          },
          {
            question: "What is Thank you?",
            options: ["Merci", "Bonjour", "Oui", "Non"],
            answer: "Merci",
          },
        ],
      },
    ],
  },
};

export default languages;