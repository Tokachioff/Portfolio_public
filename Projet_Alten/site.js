/* TAB */
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
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

/* DEMARRAGE PAGE */
window.onload = function() {
  if (document.getElementById('Grenoble')) {
    document.getElementById('Grenoble').style.display = "inline-block";
  } else {
    document.getElementById('Aéronautique').style.display = "inline-block";
  }
  
  var firstTab = document.getElementsByClassName("tablinks")[0];
  firstTab.className += " active";
}
        
/* MENU BURGER */
const burgerMenu = document.querySelector('nav');
const closeBtn = burgerMenu.querySelector('a.close-btn');
const openBtn = document.querySelector('a.open-btn');

console.log(burgerMenu, closeBtn, openBtn);

openBtn.addEventListener('click', function (e) {
    e.preventDefault(); 
    burgerMenu.classList.add('visible');
});

closeBtn.addEventListener('click', function (e) {
    e.preventDefault(); 
    burgerMenu.classList.remove('visible');
});

/* MENU "BURGER" TAB */
const TabMenu = document.querySelector('.tab');
const closeBtn2 = TabMenu.querySelector('a.close-btn-2');
const openBtn2 = document.querySelector('a.open-btn-2');

console.log(TabMenu, closeBtn2, openBtn2);

openBtn2.addEventListener('click', function (e) {
    e.preventDefault(); 
    TabMenu.classList.add('visible');
});

closeBtn2.addEventListener('click', function (e) {
    e.preventDefault(); 
    TabMenu.classList.remove('visible');
});

/* FONCTION BACK */
function goBack() {
  history.back();
}
