document.addEventListener("DOMContentLoaded", () => {

    /* =====================
       NAVBAR
    ===================== */
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const themeToggle = document.getElementById("themeToggle");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            themeToggle.textContent =
                document.body.classList.contains("dark-mode")
                    ? "☀️"
                    : "🌙";
        });
    }

    /* =====================
       EDUCATION POPUP + SLIDER
    ===================== */
    const openBtn = document.getElementById("openAchievements");
    const achievementPopup = document.getElementById("achievementPopup");
    const closeBtn = document.getElementById("closePopup");

    let achSlides = [];
    let achIndex = 0;
    let achInterval;

    function startAchievementSlider() {
        achSlides = achievementPopup.querySelectorAll(".ach-slide");
        if (!achSlides.length) return;

        clearInterval(achInterval);

        achIndex = 0;
        achSlides.forEach(s => s.classList.remove("active"));
        achSlides[0].classList.add("active");

        achInterval = setInterval(() => {
            achSlides[achIndex].classList.remove("active");
            achIndex = (achIndex + 1) % achSlides.length;
            achSlides[achIndex].classList.add("active");
        }, 3000);
    }

    if (openBtn && achievementPopup && closeBtn) {

        openBtn.addEventListener("click", () => {
            achievementPopup.style.display = "flex";
            startAchievementSlider();
        });

        closeBtn.addEventListener("click", () => {
            achievementPopup.style.display = "none";
            clearInterval(achInterval);
        });

        window.addEventListener("click", e => {
            if (e.target === achievementPopup) {
                achievementPopup.style.display = "none";
                clearInterval(achInterval);
            }
        });
    }

    /* =====================
       PROJECT POPUP + SLIDER
    ===================== */
    const projectBtns = document.querySelectorAll(".project-btn");
    const projectPopup = document.getElementById("projectPopup");
    const closeProjectPopup = document.getElementById("closeProjectPopup");

    const slider = document.getElementById("projectSlider");
    const title = document.getElementById("projectTitle");
    const overview = document.getElementById("projectOverview");
    const features = document.getElementById("projectFeatures");
    const tech = document.getElementById("projectTech");
    const demo = document.getElementById("projectDemo");

    let slides = [];
    let slideIndex = 0;
    let sliderInterval;

    function startProjectSlider() {
        clearInterval(sliderInterval);

        sliderInterval = setInterval(() => {
            slides[slideIndex].classList.remove("active");
            slideIndex = (slideIndex + 1) % slides.length;
            slides[slideIndex].classList.add("active");
        }, 3000);
    }

    projectBtns.forEach(btn => {
        btn.addEventListener("click", () => {

            slider.innerHTML = "";
            slideIndex = 0;

            const images = btn.dataset.images.split(",");

            images.forEach((src, i) => {
                const img = document.createElement("img");
                img.src = src;
                img.classList.add("slide");
                if (i === 0) img.classList.add("active");
                slider.appendChild(img);
            });

            slides = slider.querySelectorAll(".slide");

            title.textContent = btn.dataset.title;
            overview.textContent = btn.dataset.overview;
            features.textContent = btn.dataset.features;
            tech.textContent = btn.dataset.tech;
            demo.href = btn.dataset.demo;

            projectPopup.style.display = "flex";

            startProjectSlider();
        });
    });

    if (closeProjectPopup) {
        closeProjectPopup.addEventListener("click", () => {
            projectPopup.style.display = "none";
            clearInterval(sliderInterval);
        });
    }

    window.addEventListener("click", e => {
        if (e.target === projectPopup) {
            projectPopup.style.display = "none";
            clearInterval(sliderInterval);
        }
    });

    let achDotsContainer;
let achDots = [];

function startAchievementSlider() {
    achSlides = achievementPopup.querySelectorAll(".ach-slide");
    achDotsContainer = achievementPopup.querySelector(".ach-dots");

    if (!achSlides.length) return;

    clearInterval(achInterval);

    /* Create dots */
    achDotsContainer.innerHTML = "";
    achDots = [];

    achSlides.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("ach-dot");
        if (i === 0) dot.classList.add("active");

        dot.addEventListener("click", () => {
            changeSlide(i);
        });

        achDotsContainer.appendChild(dot);
        achDots.push(dot);
    });

    achIndex = 0;
    achSlides.forEach(s => s.classList.remove("active"));
    achSlides[0].classList.add("active");

    achInterval = setInterval(() => {
        changeSlide((achIndex + 1) % achSlides.length);
    }, 3000);
}

function changeSlide(newIndex) {
    achSlides[achIndex].classList.remove("active");
    achDots[achIndex].classList.remove("active");

    achIndex = newIndex;

    achSlides[achIndex].classList.add("active");
    achDots[achIndex].classList.add("active");
}


    /* =====================
       CERTIFICATION POPUP
    ===================== */
    const certBtns = document.querySelectorAll(".cert-btn");
    const certPopup = document.getElementById("certPopup");
    const closeCertPopup = document.getElementById("closeCertPopup");

    const certImage = document.getElementById("certImage");
    const certTitle = document.getElementById("certTitle");
    const certOrg = document.getElementById("certOrg");
    const certDate = document.getElementById("certDate");
    const certDesc = document.getElementById("certDesc");

    certBtns.forEach(btn => {
        btn.addEventListener("click", () => {

            certImage.src = btn.dataset.img;
            certTitle.textContent = btn.dataset.title;
            certOrg.textContent = btn.dataset.org;
            certDate.textContent = btn.dataset.date;
            certDesc.textContent = btn.dataset.desc;

            certPopup.style.display = "flex";
        });
    });

    if (closeCertPopup) {
        closeCertPopup.addEventListener("click", () => {
            certPopup.style.display = "none";
        });
    }

    window.addEventListener("click", e => {
        if (e.target === certPopup) {
            certPopup.style.display = "none";
        }
    });

});
