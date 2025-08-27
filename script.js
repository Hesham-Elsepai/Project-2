// Dark mode toggle
const toggle = document.getElementById("dark-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Typing effect (rotating phrases)
const text = document.querySelector(".typing");
const phrases = [
  "Hi, I'm Hesham El-sepai",
  "Digital IC Design Engineer",
  "FPGA & HDL Enthusiast"
];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function typingEffect() {
  text.innerHTML = currentPhrase.join('');
  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }
  if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }
  if (j === phrases[i].length) {
    isDeleting = true;
    setTimeout(typingEffect, 1000); // pause before deleting
    return;
  }
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }
  setTimeout(typingEffect, isDeleting ? 50 : 120);
}
typingEffect();

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll animations (fade-in)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
document.querySelectorAll("section").forEach(sec => observer.observe(sec));

// Back to top button
const topBtn = document.createElement("button");
topBtn.innerText = "⬆";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.display = "none";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#6a0dad";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Footer year
const footer = document.createElement("footer");
footer.innerHTML = `© ${new Date().getFullYear()} Hesham El-sepai. All rights reserved.`;
footer.style.textAlign = "center";
footer.style.padding = "20px";
footer.style.color = "#aaa";
document.body.appendChild(footer);
