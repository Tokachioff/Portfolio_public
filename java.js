/* Captcha */
(function() {
    var recaptchaScript = document.createElement('script');
    recaptchaScript.src = "https://www.google.com/recaptcha/api.js";
    recaptchaScript.async = true;
    recaptchaScript.defer = true;
    document.head.appendChild(recaptchaScript);
})();

/* Menu langue */
function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    var img = document.querySelector(".dropdown img"); 

    if (menu.style.display == "none") {
        menu.style.display = "block";
        img.classList.add("rotate");
    }
    else {
        menu.style.display = "none";
        img.classList.remove("rotate");
    }
}

if (document.getElementById("dropdownMenu_2")) {
    function toggleMenu_2() {
        var menu2 = document.getElementById("dropdownMenu_2");
        var img2 = document.querySelector(".dropdown_2 img"); 

        if (menu2.style.display == "none") {
            menu2.style.display = "block";
            img2.classList.add("rotate");
        }
        else {
            menu2.style.display = "none";
            img2.classList.remove("rotate");
        }
    }
}

// Fermer le menu quand on clique en dehors
window.onclick = function(event) {
    var menu = document.getElementById("dropdownMenu");
    var img = document.querySelector(".dropdown img");

    var menu2 = document.getElementById("dropdownMenu_2");
    var img2 = document.querySelector(".dropdown_2 img");

    // Si on clique en dehors du menu ou du bouton, on ferme le menu
    if (!event.target.closest('.dropdown') && document.getElementById("dropdownMenu") && menu.style.display === "block") {
        menu.style.display = "none";
        if (img) { //s'assure que l'image existe
            img.classList.remove("rotate"); // Enlève la rotation quand on ferme
        }
    } else if (!event.target.closest('.dropdown_2') && document.getElementById("dropdownMenu_2") && menu2.style.display === "block") {
        menu2.style.display = "none";
        if (img2) { //s'assure que l'image existe
            img2.classList.remove("rotate"); // Enlève la rotation quand on ferme
        }
    }
}

/* Effet phrase d'accueil */
const text = document.querySelector(".auto_text");
let phrases = [];

if (document.getElementById("francais")) {
    phrases = [
        '"Transformer les idées en code et les projets en succès."',
        '"Apprendre, coder, innover : mon quotidien en informatique."',
        '"Passionné par l’informatique, motivé par les défis, prêt à innover !"'
    ];
} else if (document.getElementById("anglais")) {
    phrases = [
        '"Turning ideas into code and projects into success."',
        '"Learning, coding, innovating: my daily computer science."',
        '"Passionate about IT, motivated by challenges, ready to innovate ! "'
    ];
}

let index = 0;

function textLoad() {
    text.style.opacity = "1"; // Réafficher le texte
    text.style.width = "0"; // Réinitialiser l'animation
    text.textContent = phrases[index]; // Mettre à jour le texte
    text.style.animation = "none"; // Supprimer l'animation précédente
    void text.offsetWidth; // Force un recalcul CSS
    text.style.animation = "typing 4s steps(24, end) forwards, blink 0.7s infinite";

    // Faire disparaître le texte après 4 secondes, puis changer l'image
    setTimeout(() => {
        text.classList.add("fade-out");

    }, 4000);

    // Réinitialisation du texte après 2 secondes de fondu
    setTimeout(() => {
        text.classList.remove("fade-out");
    }, 6000);

    // Passer à la phrase suivante
    index = (index + 1) % phrases.length;
}

if (document.querySelector(".auto_text") && window.innerWidth >= 1530) {
    textLoad();
    setInterval(textLoad, 7000); // Toutes les 7 secondes
}

/* Menu Burger */
const burgerMenu = document.querySelector('nav.affiche');
const openBtn = document.querySelector('a.open-btn');

if (document.querySelector('a.open-btn')){
    openBtn.addEventListener('click', function (e) {
        e.preventDefault();
        burgerMenu.classList.toggle('visible');
    });
}

/* Menu Carousel */
const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const firstCard = document.querySelector(".menu-item");
const carouselChildrens = [...carousel.children];

let cardPerView = Math.round(carousel.offsetWidth / firstCard);

let cardWidth, gap;

/*
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
})
*/
function updateMeasurements() {
  cardWidth = firstCard.getBoundingClientRect().width;
  gap = parseFloat(getComputedStyle(carousel).gap);
}

window.addEventListener('load', updateMeasurements);
window.addEventListener('resize', updateMeasurements);

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: cardWidth + gap });
});

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: - (cardWidth + gap)});
});

const infiniteScroll = () => {
    if (carousel.scrollLeft == 0) {
        /*
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth -(2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
        */
       prevBtn.style.visibility = "hidden";
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        /*
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
        */
        nextBtn.style.visibility = "hidden";
    } else {
        nextBtn.style.visibility = "visible";
        prevBtn.style.visibility = "visible";
    }
}

carousel.addEventListener("scroll", infiniteScroll);

/* Version anglais des after de formation */
if (document.getElementById("anglais")) {
    const style = document.createElement('style');
    style.innerHTML = `#bio part div:last-child section::after { content: 'Summer 2024' !important; }`;
    document.head.appendChild(style);

    const style_2 = document.createElement('style');
    style_2.innerHTML = `#bio part div:first-child section:last-child::after { content: 'January 2021' !important; }`;
    document.head.appendChild(style_2);
}

const modalContainer = document.querySelector(".modal-container");
const modalTrigger = document.querySelector(".modal-overlay");
const modals = document.querySelectorAll(".modal");

modalTrigger.addEventListener("click", closeModal);

function openModal(nom) {
    modalContainer.classList.toggle("active");
    document.documentElement.style.overflowY = "hidden";
    modals.forEach(modal => modal.style.visibility = "hidden")
    nom.style.visibility = "visible";
}

function closeModal() {
    modalContainer.classList.toggle("active");
    document.documentElement.style.overflowY = "visible";
    modals.forEach(modal => modal.style.visibility = "hidden")
}
