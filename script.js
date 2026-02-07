const envelope = document.querySelector('.envelope');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = 16 + Math.random() * 24 + 'px';
  heart.style.animationDuration = 3 + Math.random() * 3 + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

function heartRain(duration = 3000) {
  const interval = setInterval(createHeart, 150);

  setTimeout(() => {
    clearInterval(interval);
  }, duration);
}

envelope.addEventListener('click', () => {
  heartRain(4000); 
});

const text = "Happy Valentine's Day 💕";
const typeEl = document.getElementById('type');
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typeEl.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 90);
  }
}

setTimeout(typeWriter, 1000);

envelope.classList.add('glow');

let stars = [];

function createStars() {
  for (let i = 0; i < 40; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.textContent = '✦';

    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDuration = 2 + Math.random() * 3 + 's';

    document.body.appendChild(star);
    stars.push(star);
  }
}

function removeStars() {
  stars.forEach(star => star.remove());
  stars = [];
}
const toggle = document.getElementById('themeToggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('night');

  if (document.body.classList.contains('night')) {
    toggle.textContent = '☀️';
    createStars();
  } else {
    toggle.textContent = '🌙';
    removeStars();
  }
});
