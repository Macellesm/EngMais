const questions = [
    {
        question: "O que é indução magnética?",
        options: [
            "A criação de um campo elétrico por um campo magnético variável.",
            "A criação de um campo magnético por uma corrente elétrica constante.",
            "A geração de luz através de ímãs.",
            "A atração entre dois ímãs."
        ],
        correct: 0
    },
    {
        question: "Qual é a Lei de Faraday?",
        options: [
            "A variação da corrente elétrica é proporcional ao tempo de variação do campo magnético.",
            "A variação do campo elétrico é inversamente proporcional à distância.",
            "A corrente elétrica gera um campo magnético em torno de um condutor.",
            "A força magnética entre dois corpos é inversamente proporcional à sua massa."
        ],
        correct: 0
    },
    {
        question: "Qual dispositivo utiliza a indução magnética?",
        options: [
            "Bússola",
            "Transformador",
            "Termômetro",
            "Altímetro"
        ],
        correct: 1
    },
    {
        question: "Como a indução eletromagnética é usada na engenharia biomédica?",
        options: [
            "No diagnóstico de doenças por ressonância magnética.",
            "No controle da pressão arterial.",
            "Na reabilitação de membros.",
            "Em sensores cardíacos."
        ],
        correct: 0
    },
    {
        question: "Qual aplicação na engenharia aeronáutica envolve indução eletromagnética?",
        options: [
            "Propulsão elétrica de aeronaves.",
            "Detecção de falhas em estruturas metálicas.",
            "Monitoramento climático em voo.",
            "Controle automatizado do trem de pouso."
        ],
        correct: 1
    },
    {
        question: "Qual conceito físico está relacionado diretamente à indução magnética?",
        options: [
            "Fluxo magnético.",
            "Carga elétrica.",
            "Velocidade da luz.",
            "Potência elétrica."
        ],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("next");

    const question = questions[currentQuestion];
    questionEl.textContent = question.question;
    optionsEl.innerHTML = "";

    question.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.className = "option";
        btn.onclick = () => selectOption(btn, index);
        optionsEl.appendChild(btn);
    });

    nextBtn.disabled = true;
}

function selectOption(btn, index) {
    const buttons = document.querySelectorAll(".option");
    buttons.forEach((button) => button.classList.remove("selected"));
    btn.classList.add("selected");

    const nextBtn = document.getElementById("next");
    nextBtn.disabled = false;
    nextBtn.onclick = () => validateAnswer(index);
}

function validateAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestion].correct;

    if (selectedIndex === correctIndex) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    const quizEl = document.getElementById("quiz");
    const scoreContainer = document.getElementById("score-container");
    const scoreEl = document.getElementById("score");

    quizEl.style.display = "none";
    scoreContainer.style.display = "block";
    scoreEl.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

// Inicializa o quiz
loadQuestion();
