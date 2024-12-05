const questions = [
    {
        question: "O que é Indução Eletromagnética?",
        options: [
            "A produção de corrente elétrica através de um campo magnético",
            "A alteração da resistência de um condutor com a variação de temperatura",
            "A aceleração de partículas no interior de um campo elétrico",
            "A movimentação de partículas com a ajuda de corrente elétrica"
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
        question: "Como a indução eletromagnética é usada na engenharia biomédica?",
        options: [
            "No diagnóstico de doenças através de imagens de ressonância magnética",
            "No controle da pressão arterial através de circuitos magnéticos",
            "Na criação de dispositivos para reabilitação de membros",
            "Em sistemas de monitoramento cardíaco com sensores magnéticos"
        ],
        correct: 0
    },
    {
        question: "Em que área da engenharia aeronáutica a indução eletromagnética é aplicada?",
        options: [
            "Na propulsão de aeronaves usando motores elétricos",
            "Na detecção de falhas em sistemas de radar por meio de sensores magnéticos",
            "No controle de tráfego aéreo utilizando tecnologia de navegação por indução",
            "No aprimoramento de aviões stealth utilizando campos magnéticos"
        ],
        correct: 1
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.onclick = () => selectOption(index, button);
        optionsContainer.appendChild(button);
    });

    // Esconder o botão "Próxima" até que uma opção seja selecionada
    document.getElementById('next').style.display = 'none';
    document.getElementById('next').disabled = true;
}

function selectOption(index, button) {
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    // Remover a seleção de outras opções
    options.forEach(option => {
        option.classList.remove('selected');
    });

    // Marcar a opção selecionada
    button.classList.add('selected');
    
    // Mostrar o botão "Próxima" agora
    document.getElementById('next').style.display = 'block';
    document.getElementById('next').disabled = false;
    document.getElementById('next').onclick = () => nextQuestion(index === question.correct);
}

function nextQuestion(isCorrect) {
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    if (isCorrect) {
        alert("Resposta correta!");
    } else {
        alert("Resposta incorreta!");
    }

    if (isLastQuestion) {
        alert("Fim do quiz!");
        currentQuestionIndex = 0;
    } else {
        currentQuestionIndex++;
        loadQuestion();
    }
}

loadQuestion();
