document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        })
    })
})

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
}else {
    mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    documentElement.preventDefault();
    document.documentElement.scrollIntoView({
        behavior: "smooth"
})

}

//Hamburger Menu
const hambugerMenu = document.querySelector('.menuButtonContainer');
hambugerMenu.addEventListener('click', handleMenu);
const navBar = document.querySelector('.menu');
const hideNav = document.querySelector('.hide-nav');
const menuContainer = document.querySelector('.hamberMenuNav');
const normalNav = document.querySelector('.normalNav');
function handleMenu(){
    if(navBar.classList.contains('hide-nav')){
        navBar.classList.remove('hide-nav');
        normalNav.style.display = 'none';
        menuContainer.style.display = 'flex';
    }else{
        navBar.classList.add('hide-nav');
        normalNav.style.display = 'none';
        menuContainer.style.display = 'block';
    }
    
    
    
    
}