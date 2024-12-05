const quizData = [
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
            "A variação da corrente elétrica é proporcional ao tempo de variação do campo magnético",
            "A variação do campo elétrico é inversamente proporcional à distância",
            "A corrente elétrica gera um campo magnético em torno de um condutor",
            "A força magnética entre dois corpos é inversamente proporcional à sua massa"
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

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function buildQuiz() {
    const output = quizData.map((currentQuestion, questionNumber) => {
        const answers = currentQuestion.options.map(
            (option, index) => `
                <label>
                    <input type="radio" name="question${questionNumber}" value="${index}">
                    ${option}
                </label>
            `
        ).join("");
        return `
            <div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers}</div>
        `;
    });
    quizContainer.innerHTML = output.join("");
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (Number(userAnswer) === currentQuestion.correct) {
            numCorrect++;
            answerContainers[questionNumber].style.color = "green";
        } else {
            answerContainers[questionNumber].style.color = "red";
        }
    });

    resultsContainer.innerHTML = `${numCorrect} de ${quizData.length} corretas.`;
}

buildQuiz();
submitButton.addEventListener("click", showResults);

