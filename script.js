// Exercise 3: ???? Say Hello ???????????????????
const helloBtn = document.querySelector('#helloBtn');
const statusBox = document.querySelector('#status');

helloBtn.addEventListener('click', () => {
  statusBox.textContent = '?? Hello from Natakorn Khawyai (67160213)! Website updated via CI/CD.';
  statusBox.style.borderColor = 'var(--primary)';
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
