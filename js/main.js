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




//Hamburger-Menu-Behaviour
const hamMenu = document.querySelector('.hamMenu')
const btn = document.querySelector('#hamBtn');
btn.addEventListener('click', handleHam);
const i = document.querySelector('#x')

function handleHam(e){
console.log(e);
hamMenu.classList.toggle('dispMenu');
i.classList.toggle('fa-bars');
i.classList.toggle('fa-x');

}