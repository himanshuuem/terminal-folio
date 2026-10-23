const LINKEDIN_URL = "https://www.linkedin.com/in/himanshuuem";

function markCurrentPage() {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((link) => {
    if (link.getAttribute("href") === page) link.setAttribute("aria-current", "page");
  });
}

function typeHeading() {
  const heading = document.querySelector(".typed");
  if (!heading || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const text = heading.dataset.text;
  let index = 0;
  heading.textContent = "";
  heading.classList.add("is-typing");
  const timer = setInterval(() => {
    heading.textContent = text.slice(0, ++index);
    if (index >= text.length) {
      clearInterval(timer);
      setTimeout(() => heading.classList.remove("is-typing"), 1500);
    }
  }, 35);
}

function setupProjectFilter() {
  const group = document.querySelector(".filter");
  if (!group) return;
  const projects = document.querySelectorAll(".project");
  group.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    const { filter } = button.dataset;
    group.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    projects.forEach((project) => {
      project.hidden = filter !== "all" && project.dataset.kind !== filter;
    });
  });
}

function setupContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;
  const errorBox = form.querySelector(".error");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const missing = Object.entries(data).find(([, value]) => !String(value).trim());
    if (missing) {
      errorBox.textContent = `error: '${missing[0]}' is required`;
      form.elements[missing[0]].focus();
      return;
    }
    errorBox.textContent = "";
    const note = `${data.subject}\n\n${data.message}\n\n— ${data.name}`;
    try {
      await navigator.clipboard.writeText(note);
      errorBox.textContent = "copied ✓ opening linkedin…";
    } catch {
      errorBox.textContent = "clipboard blocked: copy your message manually";
    }
    window.open(LINKEDIN_URL, "_blank", "noopener");
  });
}

document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
markCurrentPage();
typeHeading();
setupProjectFilter();
setupContactForm();
