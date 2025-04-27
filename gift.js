document.addEventListener('DOMContentLoaded', function() {
    const giftBox = document.querySelector('.gift-box');
    const lid = document.querySelector('.lid');
    const openGiftButton = document.getElementById('openGiftButton');
    const birthdaySong = document.getElementById('birthdaySong');
    const giftReveal = document.getElementById('gift-reveal');
    const finalGiftImage = document.getElementById('finalGiftImage');
    const loveMessage = document.getElementById('loveMessage');
    const floatingImagesContainer = document.getElementById('floating-images-container');
    const imageSources = [
        '1.jpg',
        '29817.jpg',
        '3.jpg',
        '2.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg'
    ];

    openGiftButton.addEventListener('click', () => {
        lid.style.transform = 'rotateX(-180deg)'; 
        birthdaySong.play(); 
        openGiftButton.style.display = 'none'; 

        setTimeout(() => {
            finalGiftImage.src = 'awsd.jpg';
            loveMessage.textContent = 'สุขสันต์วันเกิดนะ คนสวยของเค้า! ขอให้เธอเจอแต่เรื่องดีๆ ในชีวิต ไม่ว่าจะเป็นเรื่องเล็กหรือเรื่องใหญ่ ขอให้ทุกวันของเธอมีแต่รอยยิ้ม เสียงหัวเราะ ขอบคุณนะที่เธอเข้ามาเป็นโลกอีกใบของเรา ไม่ว่าเธอจะเจอปัญหาอะไร เราจะอยู่ข้างๆเธอตลอดนะ และจะอยู่ฉลองวันเกิดด้วยกันไปอีกนานแสนนานเลยนะค้าบ จุ๊บๆ ❤️🎂 '; // ข้อความบอกรัก
            giftReveal.style.display = 'block';

            imageSources.forEach((src, index) => {
                const img = document.createElement('img');
                img.src = src;
                img.classList.add('floating-image');

                
                function setRandomPosition() {
                    img.style.left = `${Math.random() * 100}vw`; 
                    img.style.top = `-${50 + Math.random() * 50}px`; 
                }

                setRandomPosition(); 

                
                img.style.animationDelay = `${Math.random() * 3}s`;
                img.style.animationDuration = `${7 + Math.random() * 10}s`; 
                img.addEventListener('animationiteration', setRandomPosition); 

                floatingImagesContainer.appendChild(img);
            });

            
        }, 1000); 
    });
});