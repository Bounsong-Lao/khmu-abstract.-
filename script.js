document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Logic
    const questions = [
        {
            question: "ປະໂຫຍກ 'ສຶມມ່າຍເລິ' (Smmaay le'.) ໃນພາສາກຶມມຸ ໝາຍຄວາມວ່າແນວໃດ?",
            options: [
                "ຂອບໃຈ",
                "ສະບາຍດີ",
                "ລາກ່ອນ",
                "ເຈົ້າຊື່ຫຍັງ?"
            ],
            answer: "ສະບາຍດີ",
            explanation: "ສຶມມ່າຍເລິ ເປັນຄຳທັກທາຍພື້ນຖານ ໝາຍເຖິງ ສະບາຍດີ."
        },
        {
            question: "ຄຳວ່າ 'ແຫມ' ໃນພາສາກຶມມຸ ໝາຍເຖິງຫຍັງ?",
            options: [
                "ແມ່",
                "ນ້ອງ",
                "ພໍ່",
                "ອ້າຍ"
            ],
            answer: "ນ້ອງ",
            explanation: "ແຫມ ໝາຍເຖິງ ນ້ອງ."
        },
        {
            question: "ຖ້າຕ້ອງການເວົ້າວ່າ 'ອ້າຍ' ໃນພາສາກຶມມຸ, ຄວນເວົ້າຄຳໃດ?",
            options: [
                "ແຫມ",
                "ຢົງ",
                "ຕາຍ",
                "ມະ"
            ],
            answer: "ຕາຍ",
            explanation: "ຕາຍ ໝາຍເຖິງ ອ້າຍ."
        },
        {
            question: "ຄຳສັບໃດໃນພາສາກຶມມຸທີ່ແປວ່າ 'ນ້ຳຖ້ວມ'?",
            options: [
                "ອົມ",
                "ຖ້ວມ",
                "ອົມຖ້ວມ",
                "ຫຼັນເດຼີຍ"
            ],
            answer: "ອົມຖ້ວມ",
            explanation: "ອົມ ໝາຍເຖິງ ນ້ຳ, ຖ້ວມ ໝາຍເຖິງ ຖ້ວມ. ສະນັ້ນ, ອົມຖ້ວມ ໝາຍເຖິງ ນ້ຳຖ້ວມ."
        },
        {
            question: "ຄຳວ່າ 'ເຫມືອນຫມັງ' ໃນພາສາກຶມມຸ ໝາຍເຖິງຫຍັງ?",
            options: [
                "ໃໝ່",
                "ເກົ່າ",
                "ຄືເກົ່າ",
                "ຄື"
            ],
            answer: "ຄືເກົ່າ",
            explanation: "ເຫມືອນ ໝາຍເຖິງ ຄື, ຫມັງ ໝາຍເຖິງ ເກົ່າ. ສະນັ້ນ, ເຫມືອນຫມັງ ໝາຍເຖິງ ຄືເກົ່າ."
        },
        {
            question: "ຄຳໃດທີ່ແປວ່າ 'ຫົວໃຈ' ໃນພາສາກຶມມຸ?",
            options: [
                "ເລີະ",
                "ຫຼືເຍື້ອມ",
                "ເລົ້າ",
                "ປຶງກະ"
            ],
            answer: "ຫຼືເຍື້ອມ",
            explanation: "ຫຼືເຍື້ອມ ໝາຍເຖິງ ຫົວໃຈ."
        },
        {
            question: "ຖ້າທ່ານຕ້ອງການເວົ້າວ່າ 'ໃຫ້ຮູ້' ໃນພາສາກຶມມຸ, ທ່ານຈະເວົ້າຄຳໃດ?",
            options: [
                "ອັນ",
                "ເຫນິງ",
                "ອັນເຫນິງ",
                "ເວົ້າ"
            ],
            answer: "ອັນເຫນິງ",
            explanation: "ອັນ ໝາຍເຖິງ ໃຫ້, ເຫນິງ ໝາຍເຖິງ ຮູ້. ສະນັ້ນ, ອັນເຫນິງ ໝາຍເຖິງ ໃຫ້ຮູ້."
        },
        {
            question: "ຄຳວ່າ 'ບຽງ' ໃນພາສາກຶມມຸ ໝາຍເຖິງຫຍັງ?",
            options: [
                "ຄົນລາວ",
                "ຄົນເຮົາ",
                "ຄົນອື່ນ",
                "ຄົນກຶມມຸ"
            ],
            answer: "ຄົນອື່ນ",
            explanation: "ບຽງ ໝາຍເຖິງ ຄົນອື່ນ."
        },
        {
            question: "ຄຳວ່າ 'ປຶງກະ' ໝາຍເຖິງຫຍັງ?",
            options: [
                "ເວົ້າ",
                "ອາຍ",
                "ດີໃຈ",
                "ສົງສານ"
            ],
            answer: "ອາຍ",
            explanation: "ປຶງກະ ໝາຍເຖິງ ອາຍ."
        },
        {
            question: "ຖ້າຢາກເວົ້າວ່າ 'ຫາກບຸນມີ' ໃນພາສາກຶມມຸ, ທ່ານຈະເວົ້າຄຳໃດ?",
            options: [
                "ຫອມຸນ",
                "ຫາກຫອມຸນອາ",
                "ອາ",
                "ບຸນ"
            ],
            answer: "ຫາກຫອມຸນອາ",
            explanation: "ຫາກຫອມຸນອາ ໝາຍເຖິງ ຫາກບຸນມີ."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsSpan.textContent = questions.length;
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <ul class="quiz-options">
                        ${q.options.map(option => `<button>${option}</button>`).join('')}
                    </ul>
                    <div class="feedback"></div>
                    <button id="next-question-btn" style="display:none;">ຄຳຖາມຕໍ່ໄປ</button>
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.quiz-options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', selectAnswer);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const userAnswer = selectedButton.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        const feedbackDiv = quizContainer.querySelector('.feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const optionButtons = quizContainer.querySelectorAll('.quiz-options button');

        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
        });

        if (userAnswer === currentQuestion.answer) {
            score++;
            feedbackDiv.textContent = "ຖືກຕ້ອງ! 👍";
            feedbackDiv.classList.remove('wrong');
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${currentQuestion.answer}". ${currentQuestion.explanation}`;
            feedbackDiv.classList.remove('correct');
            feedbackDiv.classList.add('wrong');
        }
        nextBtn.style.display = 'block';
        nextBtn.addEventListener('click', nextQuestion);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreSpan.textContent = score;
    }

    // Initial load: show start button
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
});
