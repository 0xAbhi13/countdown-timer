/* ============================================================
   Countdown Timer — script.js
   Handles Date calculations, interval management, validation.
   ============================================================ */

// --- Configuration -----------------------------------------------------------
// Change this single constant to set the default target date.
const DEFAULT_TARGET = new Date("2026-12-31T23:59:59");

// --- DOM references ----------------------------------------------------------
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const statusEl = document.getElementById("status");
const targetDateEl = document.getElementById("targetDate");
const eventTitleEl = document.getElementById("eventTitle");

const progressBarEl = document.getElementById("progressBar");
const progressTextEl = document.getElementById("progressText");
const progressEl = document.getElementById("progress");

const formEl = document.getElementById("setForm");
const inputEl = document.getElementById("targetInput");
const errorEl = document.getElementById("formError");

// --- State ------------------------------------------------------------------
let targetDate = null;
let startTime = null;
let intervalId = null;

// --- Helpers ----------------------------------------------------------------
function pad2(value) {
  return String(value).padStart(2, "0");
}

function setUnits(days, hours, minutes, seconds) {
  daysEl.textContent = pad2(days);
  hoursEl.textContent = pad2(hours);
  minutesEl.textContent = pad2(minutes);
  secondsEl.textContent = pad2(seconds);
}

function toLocalInputValue(date) {
  const pad = (n) => String(n).padStart(2, "0");
  const y = date.getFullYear();
  const m = pad(date.getMonth() + 1);
  const d = pad(date.getDate());
  const h = pad(date.getHours());
  const min = pad(date.getMinutes());
  return `${y}-${m}-${d}T${h}:${min}`;
}

function updateTargetDisplay() {
  targetDateEl.setAttribute("datetime", targetDate.toISOString());
  targetDateEl.textContent = targetDate.toLocaleString(undefined, {
    dateStyle: "long",
    timeStyle: "short",
  });
}

function setProgress(percent) {
  const clamped = Math.max(0, Math.min(100, percent));
  progressBarEl.style.width = clamped + "%";
  progressTextEl.textContent = Math.round(clamped) + "%";
  progressEl.setAttribute("aria-valuenow", String(Math.round(clamped)));
}

// --- Core countdown ----------------------------------------------------------
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  // Target has been reached or is in the past.
  if (diff <= 0) {
    setUnits(0, 0, 0, 0);
    setProgress(100);

    if (targetDate < now) {
      statusEl.textContent = "The target date has already passed. Choose a future date.";
      statusEl.classList.remove("is-complete");
      statusEl.classList.add("is-past");
    } else {
      statusEl.textContent = "The countdown is complete!";
      statusEl.classList.remove("is-past");
      statusEl.classList.add("is-complete");
    }

    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
    return;
  }

  const totalMs = 1000 * 60 * 60 * 24;
  const days = Math.floor(diff / totalMs);
  const hours = Math.floor((diff % totalMs) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  setUnits(days, hours, minutes, seconds);

  // Progress: elapsed share of the total countdown window.
  if (startTime && targetDate > startTime) {
    const total = targetDate - startTime;
    const elapsed = now - startTime;
    setProgress((elapsed / total) * 100);
  } else {
    setProgress(0);
  }

  statusEl.textContent = "";
  statusEl.classList.remove("is-complete", "is-past");
}

function beginCountdown(newTarget) {
  // Prevent duplicate intervals when restarting.
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }

  targetDate = newTarget;
  startTime = new Date();

  updateTargetDisplay();
  updateCountdown();

  // Only tick while the target is still in the future.
  if (targetDate > new Date()) {
    intervalId = setInterval(updateCountdown, 1000);
  }
}

// --- Form handling ----------------------------------------------------------
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  errorEl.textContent = "";

  const value = inputEl.value.trim();
  if (!value) {
    errorEl.textContent = "Please select a date and time.";
    return;
  }

  const parsed = new Date(value);
  if (isNaN(parsed.getTime())) {
    errorEl.textContent = "Invalid date. Please choose a valid date and time.";
    return;
  }

  beginCountdown(parsed);
});

// --- Init -------------------------------------------------------------------
beginCountdown(DEFAULT_TARGET);

// Pre-fill the input with the default target for convenience.
inputEl.value = toLocalInputValue(DEFAULT_TARGET);

// Clean up on page unload (defensive).
window.addEventListener("beforeunload", () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
});
