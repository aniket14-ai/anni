// Loading Screen Removal after 3s
window.onload = () => {
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
  }, 3000);
}

// Starfield Effect (Animated Stars)
const starfield = document.getElementById('starfield');
const ctx1 = starfield.getContext('2d');
starfield.width = window.innerWidth;
starfield.height = window.innerHeight;
let stars = [];

for (let i = 0; i < 200; i++) {
  stars.push({x: Math.random()*starfield.width, y: Math.random()*starfield.height, r: Math.random()*1.5});
}

function drawStars() {
  ctx1.clearRect(0, 0, starfield.width, starfield.height);
  ctx1.fillStyle = '#00ffea';
  stars.forEach(s => {
    ctx1.beginPath();
    ctx1.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx1.fill();
  });
  requestAnimationFrame(drawStars);
}
drawStars();

// Matrix Rain Effect
const matrix = document.getElementById('matrix');
const ctx2 = matrix.getContext('2d');
matrix.width = window.innerWidth;
matrix.height = window.innerHeight;

let letters = Array(256).join("1").split("");

function drawMatrix() {
  ctx2.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx2.fillRect(0, 0, matrix.width, matrix.height);
  ctx2.fillStyle = '#0f0';
  letters.map(function(y_pos, index){
    let text = String.fromCharCode(3e4 + Math.random() * 33);
    let x_pos = index * 10;
    ctx2.fillText(text, x_pos, y_pos);
    letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
  });
}
setInterval(drawMatrix, 50);

// Particle Magic Effect
const particles = document.getElementById('particles');
const ctx3 = particles.getContext('2d');
particles.width = window.innerWidth;
particles.height = window.innerHeight;
let dots = [];

for (let i = 0; i < 200; i++) {
  dots.push({
    x: Math.random() * particles.width,
    y: Math.random() * particles.height,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2
  });
}

function drawParticles() {
  ctx3.clearRect(0, 0, particles.width, particles.height);
  ctx3.fillStyle = '#ff00ff';
  dots.forEach(p => {
    ctx3.beginPath();
    ctx3.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx3.fill();
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > particles.width) p.vx *= -1;
    if (p.y < 0 || p.y > particles.height) p.vy *= -1;
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

// Secret Console Message
setTimeout(() => {
  console.log("%cAnni, you are the magic behind this creation! ✨", "color:#ff00ff; font-size:20px;");
  console.log("%cI hope you enjoy this surprise! 💖 Look in the console for more!", "color:#00ffea; font-size:16px;");
}, 5000);
