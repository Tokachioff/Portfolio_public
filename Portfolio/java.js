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

/* Menu A Propos */
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tab_content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cityName).style.display = "inline-block";
    evt.currentTarget.className += " active";
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

let index_2 = 0;

nextBtn.addEventListener('click', () => {
    if (index_2 < 4) {  // Adapter selon le nombre d'éléments
        index_2++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (index_2 > 0) {
        index_2--;
        updateCarousel();
    }
});

function updateCarousel() {
    const itemWidth = document.querySelector('.menu-item').offsetWidth + 120;
    carousel.style.transform = `translateX(${-index_2 * itemWidth}px)`;
}

/* Version anglais des after de formation */
if (document.getElementById("anglais")) {
    const style = document.createElement('style');
    style.innerHTML = `.margt::after { content: 'Summer 2024' !important; }`;
    document.head.appendChild(style);

    const style_2 = document.createElement('style');
    style_2.innerHTML = `.margb::after { content: 'January 2021' !important; }`;
    document.head.appendChild(style_2);
}