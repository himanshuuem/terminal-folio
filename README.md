# 🖥️ terminal-folio

> A multi-page personal site designed like a terminal session: `whoami`, `ls projects/`, `./contact`. Plain HTML and CSS with a sprinkle of JavaScript.

**🔗 Live demo:** https://himanshuuem.github.io/terminal-folio/

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **Three linked pages** (About, Projects, Contact) with relative links and a shared stylesheet. The active page is marked with `aria-current="page"`.
- **Terminal aesthetic:** window chrome, shell prompts as section labels and a typewriter heading (skipped when reduced motion is on).
- **Automatic light/dark** theme from `prefers-color-scheme`, so a paper-and-ink look in light mode and a phosphor-green one in dark mode.
- **Project filter** (all / ml / web) using `aria-pressed` toggle buttons.
- **Contact form** that validates input, copies the drafted note to the clipboard and opens LinkedIn. There's no backend and no exposed email address.
- Skip link, dashed focus rings and a responsive card grid built with `auto-fit` and `minmax()`.

## 🛠 Tech Stack

HTML5 · CSS3 (custom properties, Grid, media queries) · Vanilla JavaScript · JetBrains Mono · GitHub Pages

## 📁 Structure

```
terminal-folio/
├── index.html      # ./about
├── projects.html   # ./projects
├── contact.html    # ./contact
├── styles.css      # Shared theme
├── app.js          # Active nav, typewriter, filter, contact form
└── README.md
```

## 🚀 Run Locally

```bash
git clone https://github.com/himanshuuem/terminal-folio.git
cd terminal-folio
npx serve .
```

## 📚 Origin

This builds on the *Multi-Page Personal Website* project from [The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/), redesigned around my own work in ML and security.

---

Made by [Himanshu](https://github.com/himanshuuem)
