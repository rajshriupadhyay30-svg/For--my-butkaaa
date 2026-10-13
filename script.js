
/* For my Butka ❤️ */

// Switch between the 8 pages
function showPage(pageId) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Comfort message for Aayush
function showComfort() {
    const message = document.getElementById("comfort-message");

    if (message.style.display === "block") {
        message.style.display = "none";
    } else {
        message.style.display = "block";
    }
}

// A little secret from Rajshri
function showSecret() {
    const message = document.getElementById("secret-message");

    if (message.style.display === "block") {
        message.style.display = "none";
    } else {
        message.style.display = "block";
    }
}

// Floating hearts ❤️
function createHeart() {
    const heart = document.createElement("span");

    heart.innerHTML = "♥";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.color = "#ff9dbb";
    heart.style.fontSize = (12 + Math.random() * 18) + "px";
    heart.style.opacity = "0.7";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "10";

    document.body.appendChild(heart);

    const duration = 4000 + Math.random() * 3000;

    heart.animate(
        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 0.7
            },
            {
                transform: "translateY(-110vh) rotate(180deg)",
                opacity: 0
            }
        ],
        {
            duration: duration,
            easing: "linear"
        }
    );

    setTimeout(function() {
        heart.remove();
    }, duration);
}

// Create hearts slowly
setInterval(createHeart, 900);
