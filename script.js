const questions = [
    {
        question: "O que é indução eletromagnética?",
        options: [
            "A criação de um campo elétrico por um campo magnético variável.",
            "A criação de um campo magnético por uma corrente elétrica constante.",
            "A geração de luz através de ímãs.",
            "A atração entre dois ímãs."
        ],
        correct: 0
    },
    {
        question: "Qual dispositivo utiliza a indução eletromagnética?",
        options: [
            "Bússola",
            "Transformador",
            "Termômetro",
            "Altímetro"
        ],
        correct: 1
    },
    {
        question: "Quem descobriu a indução eletromagnética?",
        options: [
            "Isaac Newton",
            "Michael Faraday",
            "Nikola Tesla",
            "James Clerk Maxwell"
        ],
        correct: 1
    },
    {
        question: "Qual das seguintes aplicações da indução eletromagnética é usada na engenharia biomédica?",
        options: [
            "A criação de correntes elétricas no cérebro para modular atividades neurais, como na estimulação magnética transcraniana (TMS).",
            "A geração de ondas magnéticas constantes para facilitar a circulação sanguínea em órgãos específicos.",
            "A utilização de campos magnéticos para realizar cortes precisos em tecidos biológicos.",
            "A aplicação de correntes magnéticas fixas para aumentar a resistência óssea."
        ],
        correct: 0
    },
    {
        question: "Como a indução eletromagnética é usada na engenharia aeronáutica?",
        options: [
            "A geração de empuxo direto em aeronaves usando motores de combustão magnética.",
            "A criação de sistemas de controle automático de cabine utilizando ímãs fixos.",
            "A detecção de falhas em estruturas metálicas das aeronaves por meio de correntes induzidas (Eddy Currents).",
            "O aumento da aerodinâmica das asas utilizando campos magnéticos pulsantes."
        ],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next');
const scoreContainer = document.getElementById('score-container');
const scoreEl = document.getElementById('score');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';

    q.options.forEach((option, index) => {
        const optionContainer = document.createElement('div');
        optionContainer.classList.add('option-container');

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'quiz-option';
        radio.id = `option-${index}`;
        radio.value = index;

        const label = document.createElement('label');
        label.htmlFor = `option-${index}`;
        label.textContent = option;

        optionContainer.appendChild(radio);
        optionContainer.appendChild(label);
        optionsEl.appendChild(optionContainer);
    });

    // Desabilita o botão "Próxima" inicialmente
    nextBtn.disabled = true;

    // Habilita o botão "Próxima" apenas se uma opção for selecionada
    optionsEl.addEventListener('change', () => {
        nextBtn.disabled = !document.querySelector('input[name="quiz-option"]:checked');
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
    if (!selectedOption) return;

    const selectedIndex = parseInt(selectedOption.value);
    if (selectedIndex === questions[currentQuestion].correct) {
        score++;
    }
}

function showScore() {
    scoreContainer.style.display = 'block';
    scoreEl.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

nextBtn.addEventListener('click', () => {
    checkAnswer();

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.style.display = 'none';
        optionsEl.style.display = 'none';
        nextBtn.style.display = 'none';
        showScore();
    }
});

// Inicia o quiz
loadQuestion();
