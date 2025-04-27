const questions = [
    {
        question: " ใครหล่อสุด",
        answers: ["หมอปลา", "บูมไงคนหล่อ", "น้าค่อม", "พี่หน่วง"],
        correctAnswer: "บูมไงคนหล่อ",
        hint: "เห้ยยยย บอกให้ตอบชื่อคนหล่อนะ !!!",
    },
    {
        question: " ชื่อกลางของแมวบูมคือ",
        answers: ["อัครเดท", "ปลาทู", "D อ้วน", "จวง"],
        correctAnswer: "D อ้วน",
        hint: "ว่าแล้วว่าต้องตอบผิด ไม่ช่วยหรอก ว้ายยยย",
    },
    {
        question: " ราศี ??",
        answers: ["น้ำตาล", "เมถุน", "กรกฎ", "กุ้งละกัน"],
        correctAnswer: "เมถุน",
        hint: "ยากหรอ??",
    },
    {
        question: " ผลไม้ที่บูมไม่ชอบ",
        answers: ["แตงโม", "กล้วย", "ทุเรียน", "มัสหมั่น"],
        correctAnswer: "แตงโม",
        hint: "จริงๆก็ไม่ชอบมัสหมั่นแหละ แต่ผิดนะ",
    },
    {
        question: " ชื่อกลางของคอมบูมคือ?",
        answers: ["จาวิส", "จิมมี่", "ทอม", "เอรอน"],
        correctAnswer: "จิมมี่",
        hint: "จ",
    },
];

let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.getElementById("question");
const answerButtonsContainer = document.getElementById("answer-buttons");
const answerButtons = document.querySelectorAll(".answer-btn");
const resultContainer = document.getElementById("result-container");
const resultMessageElement = document.getElementById("result-message");
const hintMessageElement = document.getElementById("hint-message");
const nextButton = document.getElementById("nextButton");
const quizArea = document.getElementById("quiz-area");
const giftBoxContainer = document.getElementById("gift-box-container");
const openGiftButton = document.getElementById("openGiftButton");
const correctSound = document.getElementById("correctSound");
const incorrectSound = document.getElementById("incorrectSound");

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        answerButtons.forEach((button, index) => {
            button.textContent = currentQuestion.answers[index];
            button.classList.remove("incorrect");
            button.disabled = false;
        });
        resultContainer.style.display = "none";
        hintMessageElement.style.display = "none";
        nextButton.style.display = "none";
    } else {
        showGiftBox();
    }
}

function checkAnswer(selectedAnswer, clickedButton) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        resultMessageElement.textContent = "ถูกต้องครับ!";
        correctSound.play();
        clickedButton.classList.add("correct");
        answerButtons.forEach(button => button.disabled = true);
        nextButton.style.display = "block";
    } else {
        resultMessageElement.textContent = "ผิดครับ ลองดูคำใบ้นะ:";
        hintMessageElement.textContent = currentQuestion.hint;
        hintMessageElement.style.display = "block";
        incorrectSound.play();
        clickedButton.classList.add("incorrect");
        clickedButton.disabled = true;
    }
    resultContainer.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
    answerButtons.forEach(button => button.classList.remove("correct"));
}

function showGiftBox() {
    quizArea.style.display = "none";
    resultContainer.style.display = "none";
    questionElement.style.display = "none";
    answerButtonsContainer.style.display = "none";
    nextButton.style.display = "none";
    giftBoxContainer.style.display = "block";

    
    const mainQuestionHeader = document.querySelector('.game-container > h1');
    if (mainQuestionHeader) {
        mainQuestionHeader.style.display = 'none';
    }

    const birthdaySong = document.getElementById("birthdaySong");
    if (birthdaySong) {
        birthdaySong.play();
    }
    window.location.href = 'gift.html';
}

answerButtons.forEach(button => {
    button.addEventListener("click", function() {
        const selectedAnswer = this.textContent;
        checkAnswer(selectedAnswer, this);
    });
});

nextButton.addEventListener("click", nextQuestion);

openGiftButton.addEventListener("click", function() {
    const giftImageContainer = document.getElementById("gift-image-container");
    if (giftImageContainer) {
        giftImageContainer.innerHTML = '<img src="awsd.jpg" alt="ของขวัญสุดพิเศษ">';
        giftImageContainer.style.display = "block";
        openGiftButton.style.display = "none";
    }
});

showQuestion();