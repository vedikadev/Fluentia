const lessons = {
    Spanish: [
        {
            id: 1,
            title: "Basics 1",
            description: "Greetings",
            questions: [
                {
                    question: "Hello in Spanish?",
                    options: ["Hola", "Adios", "Gracias", "Si"],
                    answer: "Hola",
                },
                {
                    question: "Thank you?",
                    options: ["Gracias", "Hola", "No", "Bien"],
                    answer: "Gracias",
                },
                {
                    question: "Yes in Spanish?",
                    options: ["Si", "No", "Hola", "Bien"],
                    answer: "Si",
                },
            ],
        },
        {
            id: 2,
            title: "Basics 2",
            description: "Common phrases",
            questions: [
                {
                    question: "How are you?",
                    options: ["Como estas", "Hola", "Gracias", "Adios"],
                    answer: "Como estas",
                },
                {
                    question: "Good morning?",
                    options: ["Buenos dias", "Buenas noches", "Hola", "Gracias"],
                    answer: "Buenos dias",
                },
                {
                    question: "Good night?",
                    options: ["Buenas noches", "Hola", "Gracias", "Si"],
                    answer: "Buenas noches",
                },
            ],
        },
        {
            id: 3,
            title: "Food",
            description: "Basic food vocabulary",
            questions: [
                {
                    question: "Water in Spanish?",
                    options: ["Agua", "Leche", "Pan", "Arroz"],
                    answer: "Agua",
                },
                {
                    question: "Bread?",
                    options: ["Pan", "Agua", "Carne", "Pescado"],
                    answer: "Pan",
                },
                {
                    question: "Milk?",
                    options: ["Leche", "Agua", "Pan", "Carne"],
                    answer: "Leche",
                },
            ],
        },
        {
            id: 4,
            title: "Numbers",
            description: "Basic counting",
            questions: [
                {
                    question: "One in Spanish?",
                    options: ["Uno", "Dos", "Tres", "Cuatro"],
                    answer: "Uno",
                },
                {
                    question: "Two?",
                    options: ["Dos", "Uno", "Cinco", "Seis"],
                    answer: "Dos",
                },
                {
                    question: "Three?",
                    options: ["Tres", "Cuatro", "Uno", "Dos"],
                    answer: "Tres",
                },
            ],
        },
    ],

    French: [
        {
            id: 1,
            title: "Basics 1",
            description: "Greetings",
            questions: [
                { question: "Hello?", options: ["Bonjour", "Merci", "Oui", "Non"], answer: "Bonjour" },
                { question: "Thank you?", options: ["Merci", "Bonjour", "Salut", "Oui"], answer: "Merci" },
                { question: "Yes?", options: ["Oui", "Non", "Merci", "Salut"], answer: "Oui" },
            ],
        },
        {
            id: 2,
            title: "Basics 2",
            description: "Common phrases",
            questions: [
                { question: "Good night?", options: ["Bonne nuit", "Bonjour", "Merci", "Salut"], answer: "Bonne nuit" },
                { question: "Good morning?", options: ["Bonjour", "Bonne nuit", "Merci", "Oui"], answer: "Bonjour" },
                { question: "No?", options: ["Non", "Oui", "Merci", "Salut"], answer: "Non" },
            ],
        },
        {
            id: 3,
            title: "Food",
            description: "Food words",
            questions: [
                { question: "Water?", options: ["Eau", "Pain", "Lait", "Viande"], answer: "Eau" },
                { question: "Bread?", options: ["Pain", "Eau", "Lait", "Viande"], answer: "Pain" },
                { question: "Milk?", options: ["Lait", "Eau", "Pain", "Viande"], answer: "Lait" },
            ],
        },
        {
            id: 4,
            title: "Numbers",
            description: "Counting",
            questions: [
                { question: "One?", options: ["Un", "Deux", "Trois", "Quatre"], answer: "Un" },
                { question: "Two?", options: ["Deux", "Un", "Trois", "Quatre"], answer: "Deux" },
                { question: "Three?", options: ["Trois", "Un", "Deux", "Quatre"], answer: "Trois" },
            ],
        },
    ],

    German: [
        {
            id: 1,
            title: "Basics 1",
            description: "Greetings",
            questions: [
                { question: "Hello?", options: ["Hallo", "Danke", "Ja", "Nein"], answer: "Hallo" },
                { question: "Thank you?", options: ["Danke", "Bitte", "Hallo", "Ja"], answer: "Danke" },
                { question: "Yes?", options: ["Ja", "Nein", "Hallo", "Danke"], answer: "Ja" },
            ],
        },
        {
            id: 2,
            title: "Basics 2",
            description: "Common words",
            questions: [
                { question: "No?", options: ["Nein", "Ja", "Danke", "Hallo"], answer: "Nein" },
                { question: "Please?", options: ["Bitte", "Danke", "Ja", "Nein"], answer: "Bitte" },
                { question: "Hello again?", options: ["Hallo", "Tschüss", "Danke", "Ja"], answer: "Hallo" },
            ],
        },
        {
            id: 3,
            title: "Food",
            description: "Food words",
            questions: [
                { question: "Water?", options: ["Wasser", "Brot", "Milch", "Fleisch"], answer: "Wasser" },
                { question: "Bread?", options: ["Brot", "Wasser", "Milch", "Fleisch"], answer: "Brot" },
                { question: "Milk?", options: ["Milch", "Brot", "Wasser", "Fleisch"], answer: "Milch" },
            ],
        },
        {
            id: 4,
            title: "Numbers",
            description: "Counting",
            questions: [
                { question: "One?", options: ["Eins", "Zwei", "Drei", "Vier"], answer: "Eins" },
                { question: "Two?", options: ["Zwei", "Eins", "Drei", "Vier"], answer: "Zwei" },
                { question: "Three?", options: ["Drei", "Eins", "Zwei", "Vier"], answer: "Drei" },
            ],
        },
    ],
    Japanese: [
        {
            id: 1,
            title: "Basics 1",
            description: "Greetings",
            questions: [
                { question: "Hello?", options: ["Konnichiwa", "Arigato", "Sayonara", "Hai"], answer: "Konnichiwa" },
                { question: "Thank you?", options: ["Arigato", "Konnichiwa", "Hai", "Sayonara"], answer: "Arigato" },
                { question: "Yes?", options: ["Hai", "Iie", "Arigato", "Sayonara"], answer: "Hai" },
            ],
        },
        {
            id: 2,
            title: "Basics 2",
            description: "Common words",
            questions: [
                { question: "No?", options: ["Iie", "Hai", "Arigato", "Konnichiwa"], answer: "Iie" },
                { question: "Goodbye?", options: ["Sayonara", "Arigato", "Hai", "Konnichiwa"], answer: "Sayonara" },
                { question: "Please?", options: ["Onegaishimasu", "Arigato", "Hai", "Iie"], answer: "Onegaishimasu" },
            ],
        },
        {
            id: 3,
            title: "Food",
            description: "Basic food words",
            questions: [
                { question: "Water?", options: ["Mizu", "Pan", "Gohan", "Niku"], answer: "Mizu" },
                { question: "Rice?", options: ["Gohan", "Mizu", "Pan", "Niku"], answer: "Gohan" },
                { question: "Meat?", options: ["Niku", "Mizu", "Gohan", "Pan"], answer: "Niku" },
            ],
        },
        {
            id: 4,
            title: "Numbers",
            description: "Counting",
            questions: [
                { question: "One?", options: ["Ichi", "Ni", "San", "Yon"], answer: "Ichi" },
                { question: "Two?", options: ["Ni", "Ichi", "San", "Yon"], answer: "Ni" },
                { question: "Three?", options: ["San", "Ichi", "Ni", "Yon"], answer: "San" },
            ],
        },
    ],
    Korean: [
        {
            id: 1,
            title: "Basics 1",
            description: "Greetings",
            questions: [
                { question: "Hello?", options: ["Annyeong", "Gamsa", "Ne", "Jalga"], answer: "Annyeong" },
                { question: "Thank you?", options: ["Gamsa", "Annyeong", "Ne", "Jalga"], answer: "Gamsa" },
                { question: "Yes?", options: ["Ne", "Aniyo", "Gamsa", "Annyeong"], answer: "Ne" },
            ],
        },
        {
            id: 2,
            title: "Basics 2",
            description: "Common words",
            questions: [
                { question: "No?", options: ["Aniyo", "Ne", "Gamsa", "Annyeong"], answer: "Aniyo" },
                { question: "Goodbye?", options: ["Jalga", "Annyeong", "Ne", "Gamsa"], answer: "Jalga" },
                { question: "Please?", options: ["Jebal", "Ne", "Aniyo", "Gamsa"], answer: "Jebal" },
            ],
        },
        {
            id: 3,
            title: "Food",
            description: "Basic food words",
            questions: [
                { question: "Water?", options: ["Mul", "Bap", "Gogi", "Kimchi"], answer: "Mul" },
                { question: "Rice?", options: ["Bap", "Mul", "Gogi", "Kimchi"], answer: "Bap" },
                { question: "Meat?", options: ["Gogi", "Mul", "Bap", "Kimchi"], answer: "Gogi" },
            ],
        },
        {
            id: 4,
            title: "Numbers",
            description: "Counting",
            questions: [
                { question: "One?", options: ["Hana", "Dul", "Set", "Net"], answer: "Hana" },
                { question: "Two?", options: ["Dul", "Hana", "Set", "Net"], answer: "Dul" },
                { question: "Three?", options: ["Set", "Hana", "Dul", "Net"], answer: "Set" },
            ],
        },
    ],
    English: [
        {
            id: 1,
            title: "Basics 1",
            description: "Grammar basics",
            questions: [
                { question: "Correct sentence?", options: ["He go", "He goes", "He gone", "He going"], answer: "He goes" },
                { question: "Plural of child?", options: ["Childs", "Children", "Child", "Childes"], answer: "Children" },
                { question: "Opposite of hot?", options: ["Cold", "Warm", "Heat", "Cooler"], answer: "Cold" },
            ],
        },
        {
            id: 2,
            title: "Basics 2",
            description: "Tenses",
            questions: [
                { question: "Past tense of go?", options: ["Went", "Go", "Gone", "Going"], answer: "Went" },
                { question: "She ___ happy.", options: ["is", "are", "am", "be"], answer: "is" },
                { question: "They ___ playing.", options: ["are", "is", "am", "be"], answer: "are" },
            ],
        },
        {
            id: 3,
            title: "Vocabulary",
            description: "Common words",
            questions: [
                { question: "Meaning of big?", options: ["Large", "Small", "Tiny", "Few"], answer: "Large" },
                { question: "Opposite of fast?", options: ["Slow", "Quick", "Rapid", "Speed"], answer: "Slow" },
                { question: "Synonym of happy?", options: ["Joyful", "Sad", "Angry", "Tired"], answer: "Joyful" },
            ],
        },
        {
            id: 4,
            title: "Advanced Basics",
            description: "Sentence formation",
            questions: [
                { question: "Correct order: 'going / I / school / am'", options: ["I am going to school", "I going am school", "Am I going school", "Going I am school"], answer: "I am going to school" },
                { question: "He ___ a book.", options: ["reads", "read", "reading", "red"], answer: "reads" },
                { question: "We ___ students.", options: ["are", "is", "am", "be"], answer: "are" },
            ],
        },
    ]
};

export default lessons;