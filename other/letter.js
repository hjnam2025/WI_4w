// letter.js 파일 내용

// localStorage에서 데이터 가져와서 배경과 텍스트 표시
document.addEventListener('DOMContentLoaded', (event) => {
    const storedGifUrl = localStorage.getItem('eclipseBackgroundGif');
    const selectedName = localStorage.getItem('eclipseName');
    const selectedDate = localStorage.getItem('eclipseDate');

    const nameDisplay = document.getElementById('selected-name');
    const dateDisplay = document.getElementById('selected-date');

    if (storedGifUrl) {
        document.body.style.backgroundImage = `url(${storedGifUrl})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
    }

    if (selectedName) {
        nameDisplay.textContent = selectedName;
    }
    if (selectedDate) {
        const firstDate = selectedDate.split('<br>')[0];
        dateDisplay.textContent = `${firstDate}에`;
    }
});

// oninput 함수들 정의
const addressee = document.getElementById('addressee');
const sender = document.getElementById('sender');
const bodyInput = document.getElementById('body');

const monitor1 = document.getElementById('monitor1');
const monitor2 = document.getElementById('monitor2');
const monitor3 = document.getElementById('monitor3');

addressee.oninput = function(){
    monitor1.innerHTML = addressee.value;
}

sender.oninput = function(){
    monitor2.innerHTML = sender.value;
}

bodyInput.oninput = function(){
    monitor3.innerHTML = bodyInput.value;
}