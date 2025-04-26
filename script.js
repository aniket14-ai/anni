// Loading screen removal
window.onload = () => {
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    startHearts();
    consoleGift();
  }, 3000);
};

// Heart Animation
function startHearts() {
  const canvas = document.getElementById('heartCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const hearts = [];
  const heartImg = new Image();
  heartImg.src = "assets/heart.png"; // Your cute heart image

  function createHeart() {
    hearts.push({
      x: Math.random() * canvas.width,
      y: -50,
      size: Math.random() * 30 + 20,
      speed: Math.random() * 2 + 1
    });
  }

  function animateHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart, i) => {
      ctx.drawImage(heartImg, heart.x, heart.y, heart.size, heart.size);
      heart.y += heart.speed;
      if (heart.y > canvas.height) {
        hearts.splice(i, 1);
      }
    });
    requestAnimationFrame(animateHearts);
  }

  setInterval(createHeart, 300);
  animateHearts();
}

// Secret Gift in Console
function consoleGift() {
  setTimeout(() => {
    console.log("%c🌸 Hey Anni! 🌸", "color:pink; font-size:20px;");
    console.log("%cYou are special and magical! 💖", "color:#ff69b4; font-size:18px;");
    console.log("%cThis world shines brighter with you! ✨", "color:#00ffff; font-size:16px;");
  }, 4000);
}
