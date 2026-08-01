/*=========================================================
                    STICKY NAVBAR
=========================================================*/

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }

});


/*=========================================================
                    ACTIVE NAV LINK
=========================================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================================
                    BACK TO TOP BUTTON
=========================================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================================
                    SMOOTH SCROLL
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*=========================================================
                    COUNTER ANIMATION
=========================================================*/

const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = +counter.innerText;

        const increment = target / 200;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(runCounter, 10);

        } else {

            counter.innerText = target;

        }

    });

};

const statsSection = document.querySelector(".statistics");

let counterStarted = false;

window.addEventListener("scroll", () => {

    if (!statsSection) return;

    const trigger = statsSection.offsetTop - 400;

    if (window.scrollY >= trigger && !counterStarted) {

        counterStarted = true;

        runCounter();

    }

});


/*=========================================================
                REVEAL ON SCROLL
=========================================================*/

const revealElements = document.querySelectorAll(

".product-card,.category-box,.why-card,.best-card,.gallery-item,.testimonial-card,.info-box"

);

const reveal = () => {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            el.style.opacity = "1";

            el.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(60px)";

    el.style.transition = ".7s";

});

window.addEventListener("scroll", reveal);

reveal();


/*=========================================================
                    FOOTER YEAR
=========================================================*/

const year = document.getElementById("year");

if (year) {

    year.innerHTML = new Date().getFullYear();

}


/*=========================================================
                NEWSLETTER FORM
=========================================================*/

const newsletter = document.querySelector(".newsletter-form");

if (newsletter) {

    newsletter.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you for subscribing!");

        this.reset();

    });

}


/*=========================================================
                CONTACT FORM
=========================================================*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Your message has been sent successfully!");

        this.reset();

    });

}


/*=========================================================
                IMAGE HOVER PRELOAD
=========================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*=========================================================
                    CONSOLE MESSAGE
=========================================================*/

console.log("%cVELOURA LUXURY WEBSITE",
"color:#D4AF37;font-size:22px;font-weight:bold;");

console.log("Designed with ❤️");