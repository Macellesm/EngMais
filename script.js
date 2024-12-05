const questions = [
    {
        question: "O que é indução eletromagnética?",
        options: [
            "Processo de gerar corrente elétrica através de variação de um campo magnético.",
            "Processo de gerar corrente elétrica através de um circuito fechado.",
            "Uso de um imã permanente para gerar eletricidade.",
            "Transformação de energia elétrica em energia térmica."
        ],
        correct: 0
    },
    {
        question: "Qual é a Lei de Faraday?",
        options: [
            "A variação do campo magnético gera um campo elétrico.",
            "A variação do campo elétrico gera um campo magnético.",
            "Campos magnéticos não influenciam correntes elétricas.",
            "A corrente elétrica não tem efeito sobre campos magnéticos."
        ],
        correct: 0
    },
    {
        question: "Qual das opções a seguir está relacionada a um tratamento terapêutico que utiliza campos magnéticos no cérebro?",
        options: [
            "Utilização de campos magnéticos para controle de dor crônica.",
            "Estimulação de regiões cerebrais para o tratamento de condições neurológicas.",
            "Uso de ondas eletromagnéticas para regeneração celular.",
            "Aplicação de impulsos magnéticos para melhorar a circulação sanguínea."
        ],
        correct: 1
    },
    {
        question: "Como a indução eletromagnética é aplicada na aeronáutica?",
        options: [
            "Através da utilização de motores elétricos para movimentação de aeronaves.",
            "Na geração de energia elétrica por sistemas de turbinas a gás.",
            "No controle de sistemas de navegação por satélite.",
            "Na detecção e monitoramento de falhas estruturais por sensores magnéticos."
        ],
        correct: 3
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(optionElement, index);
        optionsContainer.appendChild(optionElement);
    });
}

function selectOption(optionElement, selectedIndex) {
    const question = questions[currentQuestionIndex];
    const optionsContainer = document.getElementById('options-container');
    
    // Remover seleção anterior
    const allOptions = optionsContainer.querySelectorAll('.option');
    allOptions.forEach(option => option.classList.remove('selected'));
    
    // Marcar a opção selecionada
    optionElement.classList.add('selected');

    // Verificar se a opção selecionada é correta ou incorreta
    if (selectedIndex === question.correct) {
        optionElement.classList.add('correct');
    } else {
        optionElement.classList.add('incorrect');
    }

    // Desabilitar todas as outras opções
    allOptions.forEach(option => option.style.pointerEvents = 'none');
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert('Fim do quiz!');
    }
}

// Inicializa o quiz
window.onload = () => {
    displayQuestion();
};
