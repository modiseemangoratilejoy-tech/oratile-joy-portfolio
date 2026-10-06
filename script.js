const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const copyEmail = document.getElementById("copyEmail");
const toast = document.getElementById("toast");
const email = "modiseemangoratilejoy@gmail.com";

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

copyEmail.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    showToast("Email address copied!");
  } catch {
    showToast(email);
  }
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function showSocialMessage(event, message) {
  event.preventDefault();
  showToast(message);
}

document.getElementById("year").textContent = new Date().getFullYear();
