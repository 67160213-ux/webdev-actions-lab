// Exercise 3: ???? Say Hello ???????????????? #status
const helloBtn = document.querySelector('#helloBtn');
const statusBox = document.querySelector('#status');

helloBtn.addEventListener('click', () => {
  statusBox.textContent = '?? Hello from GitHub Pages! Deploy ???????????????????';
  statusBox.style.borderColor = 'var(--accent)';
  statusBox.style.fontWeight = 'bold';
});

// Exercise 3: ???? Toggle Theme (Dark / Light Mode)
const themeToggleBtn = document.querySelector('#themeToggleBtn');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  const isDark = document.body.classList.contains('dark-mode');
  if (isDark) {
    themeToggleBtn.textContent = '?? Light Mode';
  } else {
    themeToggleBtn.textContent = '?? Dark Mode';
  }
});