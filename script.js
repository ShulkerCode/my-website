// JavaScript for ShulkerCode Website

// 🎯 Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(0);
        if (document.querySelector(targetId)) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 🌙 Dark Mode Toggle
const toggleDarkMode = document.createElement("button");
toggleDarkMode.innerText = "Toggle Dark Mode";
toggleDarkMode.style.position = "fixed";
toggleDarkMode.style.bottom = "20px";
toggleDarkMode.style.right = "20px";
toggleDarkMode.style.padding = "10px";
toggleDarkMode.style.cursor = "pointer";
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// CSS for Dark Mode (Add this in styles.css)
document.addEventListener("DOMContentLoaded", function() {
    const style = document.createElement("style");
    style.innerHTML = `
        .dark-mode {
            background-color: #222;
            color: white;
        }
    `;
    document.head.appendChild(style);
});
