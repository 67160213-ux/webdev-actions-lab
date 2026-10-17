// Exercise 3: Say Hello & Toast Notification
const helloBtn = document.querySelector('#helloBtn');
const statusBox = document.querySelector('#status');
const toast = document.querySelector('#toast');

let toastTimeout;

helloBtn.addEventListener('click', () => {
  // Update status box text
  statusBox.textContent = '👋 Hello! I am Natakorn Khawyai (67160213)';
  statusBox.style.borderColor = 'var(--accent)';
  statusBox.style.backgroundColor = 'var(--badge-bg)';
  statusBox.style.color = 'var(--accent)';

  // Pop up Toast notification
  if (toast) {
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
});

// Exercise 3: Toggle Theme (Dark / Light Mode) with LocalStorage
const themeToggleBtn = document.querySelector('#themeToggleBtn');

function applyTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️ Light Mode';
  } else {
    document.body.classList.remove('dark-mode');
    themeToggleBtn.textContent = '🌙 Dark Mode';
  }
}

// Check the saved theme (if any)
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  applyTheme(true);
}

themeToggleBtn.addEventListener('click', () => {
  const isCurrentlyDark = document.body.classList.contains('dark-mode');
  const newThemeState = !isCurrentlyDark;
  
  applyTheme(newThemeState);
  localStorage.setItem('theme', newThemeState ? 'dark' : 'light');
});
