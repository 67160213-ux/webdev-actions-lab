/* ==========================================================================
   KAMEN RIDER SYSTEM // INTERACTIVE LOGIC & SOUND SYNTHESIZER
   Operator: Natakorn Khawyai (67160213)
   ========================================================================== */

// Elements
const helloBtn = document.querySelector('#helloBtn');
const statusBox = document.querySelector('#status');
const themeToggleBtn = document.querySelector('#themeToggleBtn');
const toast = document.querySelector('#toast');

let toastTimeout;
let audioCtx = null;

// Pure Web Audio API Sound Synthesizer (Zero External Dependencies)
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Sound Effect: Tokusatsu "HENSHIN" Surge & Laser Charge
function playHenshinSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Laser Charge Oscillator
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(180, now);
    osc1.frequency.exponentialRampToValueAtTime(1400, now + 0.35);

    gain1.gain.setValueAtTime(0.2, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

    osc1.connect(gain1);
    gain1.connect(ctx.destination);

    osc1.start(now);
    osc1.stop(now + 0.4);

    // High Confirmation Chime
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(880, now + 0.25);
    osc2.frequency.setValueAtTime(1760, now + 0.35);

    gain2.gain.setValueAtTime(0.18, now + 0.25);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc2.start(now + 0.25);
    osc2.stop(now + 0.65);
  } catch (e) {
    // Graceful fallback if audio is not permitted
  }
}

// Sound Effect: Form Shift Mechanical Switch
function playShiftSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(820, now + 0.2);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  } catch (e) {
    // Graceful fallback
  }
}

// --------------------------------------------------------------------------
// Exercise 3: Action 1 - Authorise / Henshin Trigger
// --------------------------------------------------------------------------
helloBtn.addEventListener('click', () => {
  // 1. Play Tokusatsu Audio Surge
  playHenshinSound();

  // 2. Update Status Box with Lore-Accurate Henshin Completed Readout
  statusBox.textContent = '[AUTHORISED] HENSHIN! Operator Natakorn Khawyai (67160213) Online // System 100%';
  statusBox.style.borderColor = 'var(--accent-primary)';
  statusBox.style.boxShadow = '0 0 25px var(--accent-primary-glow), inset 0 0 16px var(--accent-primary-dim)';

  // 3. Trigger HUD Hologram Toast Notification
  if (toast) {
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
});

// --------------------------------------------------------------------------
// Exercise 3: Action 2 - Form Shift (Rising Form vs Hazard Mode)
// --------------------------------------------------------------------------
function applyTheme(isHazard) {
  if (isHazard) {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '? RISING FORM (LIGHT)';
  } else {
    document.body.classList.remove('dark-mode');
    themeToggleBtn.textContent = '?? HAZARD FORM (DARK)';
  }
}

// Restore saved form state
const savedTheme = localStorage.getItem('rider_form');
if (savedTheme === 'hazard') {
  applyTheme(true);
}

themeToggleBtn.addEventListener('click', () => {
  playShiftSound();

  const isCurrentlyHazard = document.body.classList.contains('dark-mode');
  const newHazardState = !isCurrentlyHazard;

  applyTheme(newHazardState);
  localStorage.setItem('rider_form', newHazardState ? 'hazard' : 'rising');
});
