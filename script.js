// Dark Mode
const toggle = document.getElementById("theme-toggle");

toggle.onclick = () => {
    document.body.classList.toggle("dark");
    toggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// Scroll Animation
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// Modal
const cards = document.querySelectorAll(".project-card");
const modal = document.getElementById("project-modal");

const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalCode = document.getElementById("modal-code");
const modalLive = document.getElementById("modal-live");

const closeBtn = document.querySelector(".close");

cards.forEach(card => {
    card.addEventListener("click", () => {
        modal.style.display = "flex";

        modalImg.src = card.querySelector("img").src;
        modalTitle.textContent = card.querySelector("h3").textContent;
        modalDesc.textContent = card.querySelector("p").textContent;

        const codeLink = card.querySelector(".buttons a:nth-child(1)");
        const liveLink = card.querySelector(".buttons a:nth-child(2)");

        modalCode.href = codeLink ? codeLink.href : "#";
        modalLive.href = liveLink ? liveLink.href : "#";

        modalLive.style.display = liveLink ? "inline-block" : "none";
    });
});

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};
