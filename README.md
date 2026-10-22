<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:4f46e5,100:7c3aed&height=170&section=header&text=Countdown%20Timer&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Abhishek%20Jadhav%20%7C%20Veda%20Technology%20Internship%20Day%2013&descAlignY=62&descSize=17" alt="Countdown Timer header" />

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=4f46e5&center=true&vCenter=true&width=760&lines=Veda+Technology+Internship+%E2%80%A2+Day+13;HTML5+%E2%80%A2+CSS3+%E2%80%A2+Vanilla+JavaScript;Days+%E2%80%A2+Hours+%E2%80%A2+Minutes+%E2%80%A2+Seconds" alt="Typing introduction" />

  <p><b>Light Theme &#183; Indigo &amp; Violet Accents &#183; CSS Grid &#183; Responsive &#183; Accessible</b></p>

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
  ![Responsive](https://img.shields.io/badge/Responsive-4f46e5?style=for-the-badge)
  ![Accessible](https://img.shields.io/badge/Accessible-7c3aed?style=for-the-badge)
  ![No Build Step](https://img.shields.io/badge/No_Build_Step-16a34a?style=for-the-badge)

</div>

---

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1200&color=7c3aed&center=true&vCenter=true&width=660&lines=Days+%E2%80%A2+Hours+%E2%80%A2+Minutes+%E2%80%A2+Seconds;Live+Updates+Every+Second;Completion+Message+at+Zero" alt="Greeting typing animation" />
</div>

Countdown Timer by **Abhishek Jadhav** &mdash; Web Developer and first-year BCA student at VIIT, Baramati. Built with **HTML5 + CSS3 + Vanilla JavaScript**: a live countdown to a configurable target date, four timer units, leading zeros, progress bar, date-time picker with validation, and full responsive layout. No frameworks, no build step, no backend.

> **Internship attribution:** 45-day Web Development Internship at **Veda Technology** &mdash; Day 13: Countdown Timer.

<details>
<summary><b>Table of Contents (click to expand)</b></summary>

- [Features](#-features)
- [Technologies](#-technologies)
- [How the Timer Is Built](#-how-the-timer-is-built)
- [Accessibility](#-accessibility)
- [Project Structure](#-project-structure)
- [How to Run](#-how-to-run)
- [Profile Links](#-profile-links)
- [Screenshots](#-screenshots)
- [Testing Checklist](#-testing-checklist)
- [Deployment](#-deployment)
- [Limitations](#-limitations)
- [Accuracy Notes](#-accuracy-notes)

</details>

## Features

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=1000&color=4f46e5&center=true&vCenter=true&width=720&lines=Live+Countdown+%E2%80%A2+Days+Hours+Minutes+Seconds;Leading+Zeros+%E2%80%A2+Progress+Bar+%E2%80%A2+Completion+Message;Custom+Target+Date+%E2%80%A2+Validation+%E2%80%A2+Restart" alt="Features animation" />
</div>

- **Live countdown** &mdash; updates every second using `setInterval()` and shows Days, Hours, Minutes, Seconds.
- **Accurate calculations** &mdash; `Math.floor()` with remainder math converts milliseconds into time units.
- **Leading zeros** &mdash; values like `04` seconds display correctly.
- **Configurable target** &mdash; one clearly named `DEFAULT_TARGET` constant in `script.js`.
- **Custom date & time** &mdash; `datetime-local` input with a working "Set Countdown" button.
- **Validation** &mdash; empty and invalid inputs show useful messages; past targets show an informative message.
- **Safe restarts** &mdash; clears any existing interval before starting a new one; no duplicate intervals.
- **Completion handling** &mdash; shows "The countdown is complete!" and calls `clearInterval()` at zero.
- **Progress indicator** &mdash; animated progress bar reflecting elapsed time.
- **Responsive layout** &mdash; 4 columns on desktop, 2x2 on small screens, no horizontal overflow.
- **Accessible** &mdash; semantic landmarks, `aria-live`, focus rings, reduced-motion support.

---

## Technologies

| Technology | Use |
|------------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Semantic structure, countdown units, form, footer (`index.html`) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Custom properties, Grid, Flexbox, `clamp()`, animations, media queries, reduced-motion (`style.css`) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=000000) | Date math, `setInterval`/`clearInterval`, DOM updates, validation (`script.js`) |
| ![No Frameworks](https://img.shields.io/badge/No_Frameworks-4f46e5?style=flat-square) | Zero dependencies |
| ![Fonts](https://img.shields.io/badge/System_Fonts-475569?style=flat-square) | Segoe UI / system stack (no web-font request) |

---

## How the Timer Is Built

The markup is a centered card with four timer units, a progress bar, a status region, and a date-time form:

- A header with eyebrow, title "Countdown Timer", and subtitle "Every second brings you closer."
- An event title ("Launch Day") and a `<time>` element showing the target date.
- A progress bar with `role="progressbar"` and live percentage text.
- Four units (Days, Hours, Minutes, Seconds) in a CSS Grid.
- A status paragraph with `role="status"` and `aria-live="assertive"`.
- A form with `datetime-local` input and "Set Countdown" button.
- A footer reading "Built with HTML, CSS & JavaScript".

Presentation lives in `style.css`: custom properties drive the indigo/violet palette, spacing, shadows, and radii; Grid handles the units; Flexbox aligns the form. Motion includes a card rise, orb float, and progress shimmer, all disabled under `prefers-reduced-motion`.

Logic lives in `script.js`:
- `DEFAULT_TARGET` constant sets the default future date.
- `updateCountdown()` computes `targetDate - now`, converts via `Math.floor()`, updates the DOM, and manages progress.
- `beginCountdown()` clears any existing interval, sets state, renders once, and starts a fresh `setInterval`.
- The form handler validates empty/invalid input and calls `beginCountdown()`.
- Completion sets the message and calls `clearInterval()`.

---

## Accessibility

- Skip-friendly semantic landmarks: `main`, `section`, `header`, `footer`, `form`.
- One `<h1>` for the page title; `<h2>` for the event title.
- `role="timer"` with `aria-live="polite"` on the units container.
- `role="status"` with `aria-live="assertive"` for completion/past messages.
- `role="progressbar"` with `aria-valuemin/max/now`.
- Visible focus indicators using indigo outlines.
- `prefers-reduced-motion` disables animations and transitions.
- Sufficient colour contrast for text on white.

---

## Project Structure

```
internship-task-13/
+-- index.html
+-- style.css
+-- script.js
+-- README.md
+-- assets/
|   +-- favicon.svg
|   +-- screenshot-desktop.svg
|   +-- screenshot-tablet.svg
|   +-- screenshot-mobile.svg
+-- Veda_Technology_Task_13_Project_Report.docx
```

---

## How to Run

1. Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari).
2. No build step, no server, no dependencies.
3. Resize the window or use DevTools device mode to test desktop, tablet, and mobile widths.

---

## Profile Links

- GitHub: https://github.com/0xAbhi13
- Repository: https://github.com/0xAbhi13/countdown-timer

---

## Screenshots

![Desktop](./assets/screenshot-desktop.svg)
![Tablet](./assets/screenshot-tablet.svg)
![Mobile](./assets/screenshot-mobile.svg)

---

## Testing Checklist

- [x] Project folder contains `index.html`, `style.css`, `script.js`, `README.md`, and this report.
- [x] Countdown decreases every second.
- [x] Days, hours, minutes, seconds are calculated correctly.
- [x] A countdown set to a future date works.
- [x] A countdown set to the current time or a past date is handled correctly.
- [x] Completion message appears at zero.
- [x] Interval is cleared on completion and before restarting.
- [x] Changing the target date restarts without duplicate intervals.
- [x] Invalid date inputs show useful validation messages.
- [x] All files work together when opening `index.html`.
- [x] Layout remains usable at mobile screen widths.
- [x] Browser console contains no errors.
- [x] `prefers-reduced-motion` disables animations.

---

## Deployment

Static site &mdash; deploy the folder contents to GitHub Pages, Netlify, Vercel, or any static host. All asset paths are relative.

---

## Limitations

- Demo only: target date is client-side; no persistence or backend.
- Progress is relative to when the countdown was started in the current session.
- No sound or notification when the countdown completes.

---

## Accuracy Notes

- Timer logic, interval cleanup, and validation match the Veda Technology Task 13 requirements.
- No framework or build tool was added.
- All styling uses CSS custom properties and standard CSS3.
- JavaScript uses only standard `Date`, `setInterval`, and `clearInterval`.
