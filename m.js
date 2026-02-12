// تاريخ بداية حكايتكم
const startDate = new Date("2026-02-09T00:00:00").getTime();

// الروابط المباشرة لصورك
const images = [
    "https://i.ibb.co/jPGqBj6x/image.png",
    "https://i.ibb.co/YTfYS8KB/image.png",
    "https://i.ibb.co/ZRPbH00z/image.png",
    "https://i.ibb.co/0VGKD1wN/image.png"
];

let currentIdx = 0;

function showLogin() {
    document.getElementById('pre-lock-msg').style.display = 'none';
    document.getElementById('login-area').style.display = 'block';
}

function unlock() {
    const pass = document.getElementById('passInput').value;
    if(pass === "24/11/2006") {
        document.getElementById('lock-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('lock-screen').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            
            // تشغيل الأغنية
            const song = document.getElementById('loveSong');
            song.play().catch(e => console.log("المتصفح يحتاج تفاعل لتشغيل الصوت"));
            
            startSystem();
        }, 800);
    } else {
        alert("التاريخ غلط! ركزي شوية ❤️");
    }
}

function startSystem() {
    // تحديث العداد كل ثانية
    setInterval(() => {
        const now = new Date().getTime();
        const diff = now - startDate;
        document.getElementById('days').innerText = Math.floor(diff / 86400000);
        document.getElementById('hours').innerText = Math.floor((diff / 3600000) % 24);
        document.getElementById('mins').innerText = Math.floor((diff / 60000) % 60);
        document.getElementById('secs').innerText = Math.floor((diff / 1000) % 60);
    }, 1000);

    // تبديل صور المعرض
    const imgElement = document.getElementById('slide');
    setInterval(() => {
        currentIdx = (currentIdx + 1) % images.length;
        imgElement.style.opacity = 0;
        setTimeout(() => {
            imgElement.src = images[currentIdx];
            imgElement.style.opacity = 1;
        }, 800);
    }, 4000);

    // إنتاج القلوب المتساقطة
    setInterval(createHeart, 400);
}

function createHeart() {
    const container = document.getElementById('hearts-container');
    if (!container) return;
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

function showFinalSurprise() {
    document.getElementById('surprise-btn').style.display = 'none';
    document.getElementById('final-message').style.display = 'block';
}
