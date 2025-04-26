// Loading screen removal + start everything
window.onload = () => {
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    startShootingStars();
    startHearts();
    playLoveMusic();
    consoleGift();
  }, 3000);
};

// Heart Animation
function startHearts() {
  const canvas = document.getElementById('heartCanvas');
  const ctx = canvas.getContext('2d');
  resizeCanvas(canvas);

  const hearts = [];
  const heartImg = new Image();
  heartImg.src = "assets/heart.png";

  function createHeart(x = Math.random() * canvas.width, y = -50) {
    hearts.push({
      x: x,
      y: y,
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

  // Heart explosions on click
  window.addEventListener('click', (e) => {
    for (let i = 0; i < 5; i++) {
      createHeart(e.clientX, e.clientY);
    }
  });

  window.addEventListener('resize', () => resizeCanvas(canvas));
}

// Shooting Stars Background
function startShootingStars() {
  const canvas = document.getElementById('backgroundCanvas');
  const ctx = canvas.getContext('2d');
  resizeCanvas(canvas);

  const stars = [];

  function createStar() {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 1 + 0.5
    });
  }

  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((star, i) => {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
      star.x -= star.speed;
      star.y += star.speed;
      if (star.x < 0 || star.y > canvas.height) {
        stars.splice(i, 1);
      }
    });
    requestAnimationFrame(animateStars);
  }

  setInterval(createStar, 100);
  animateStars();

  window.addEventListener('resize', () => resizeCanvas(canvas));
}

// Resize canvas
function resizeCanvas(canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Play romantic music
function playLoveMusic() {
  const music = document.getElementById('loveMusic');
  music.volume = 0.5;
  music.play().catch(() => {
    console.log("🎵 Tap the screen to play music!");
    document.body.addEventListener('click', () => music.play());
  });
}

// Secret console gift
function consoleGift() {
  setTimeout(() => {
    console.log("%c🌸 Dear Anni, 🌸", "color:pink; font-size:20px;");
    console.log("%cYou are the light in the dark cyber world ✨", "color:#ff69b4; font-size:18px;");
    console.log("%cAlways shining bright! 💖 - From someone who loves you! 💌", "color:#00ffff; font-size:16px;");
  }, 4000);
}
