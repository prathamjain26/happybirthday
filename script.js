// Confetti Animation
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiColors = ['#f54242', '#42f554', '#4287f5', '#f5e742', '#f542d9'];
let confettiParticles = [];

class Confetti {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    this.size = Math.random() * 6 + 4;
    this.speed = Math.random() * 3 + 2;
    this.angle = Math.random() * 360;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.y += this.speed;
    this.x += Math.sin(this.angle) * 2;
    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  }
}

function generateConfetti() {
  for (let i = 0; i < 100; i++) {
    confettiParticles.push(new Confetti(Math.random() * canvas.width, Math.random() * canvas.height));
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiParticles.forEach(confetti => confetti.update());
  requestAnimationFrame(animateConfetti);
}

generateConfetti();
animateConfetti();

// Surprise Button
const surpriseBtn = document.querySelector('.surprise-btn');
surpriseBtn.addEventListener('click', () => {
  alert("Sorry I couldn't get a real toy pom🐶🐶\nHope this wud compensate");
});
