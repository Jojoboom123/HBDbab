const messages = [
    "โอ้วว ถึงวันเกิดคนสวยแล้ว",
    "อยากได้ของขวัญหล่ะสิ",
    "เล่นเกมก่อนน้า",
];

const messageContainer = document.querySelector(".message-container");
const startGameButton = document.getElementById("startGameButton");
const birthdaySong = document.getElementById("birthdaySong");

let messageIndex = 0;
let delay = 2000; // ระยะเวลาหน่วงระหว่างข้อความ (2 วินาที)

function showNextMessage() {
    if (messageIndex < messages.length) {
        const newMessage = document.createElement("p");
        newMessage.classList.add("floating-message");
        newMessage.textContent = messages[messageIndex];
        newMessage.style.animationDelay = `${messageIndex * delay / 1500}s`; // กำหนดดีเลย์ให้แต่ละข้อความ
        messageContainer.appendChild(newMessage);
        if (messageIndex === messages.length - 1) {
            // เมื่อเป็นข้อความสุดท้าย ให้รอ Animation จบแล้วค่อยแสดงปุ่ม
            newMessage.addEventListener('animationend', () => {
                startGameButton.style.display = "block";
                // เพิ่ม class 'show' เพื่อให้ปุ่มค่อยๆ ปรากฏ (ถ้าคุณใช้ CSS Transition)
                startGameButton.classList.add('show');
            });
        }
        messageIndex++;
        setTimeout(showNextMessage, delay);
    }
}

startGameButton.addEventListener("click", () => {
    window.location.href = 'game.html';
});

// เริ่มแสดงข้อความแรก
showNextMessage();

// เริ่มเล่นเพลงเมื่อหน้าโหลด
birthdaySong.play();