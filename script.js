// Loader

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 1200);

});

// Typing

new Typed("#typing", {

    strings: [

        "Front-End Developer",

        "Graphic Designer",

        "UI/UX Designer"

    ],

    typeSpeed: 70,

    backSpeed: 50,

    loop: true

});

// AOS

AOS.init({

    duration: 1000,

    once: true

});

// Mobile Menu

const menu = document.querySelector(".menu-btn");

const nav = document.querySelector(".nav-links");

menu.onclick = () => {

    nav.classList.toggle("active");

};

// Scroll Progress

window.addEventListener("scroll", () => {

    let winScroll = document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    document.getElementById("progress-bar").style.width = scrolled + "%";

});

// Back To Top

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    }

    else {

        topBtn.classList.remove("show");

    }

});

// Custom Cursor

const dot = document.querySelector(".cursor-dot");

const outline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {

    dot.style.left = e.clientX + "px";

    dot.style.top = e.clientY + "px";

    outline.style.left = e.clientX + "px";

    outline.style.top = e.clientY + "px";

});

