$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        dots: true,
        mouseDrag: false,
        nav: true,
        navText : ["PREVIOUS","NEXT"],
        onInitialized  : counter, 
        onTranslated : counter
    });
  });

  function counter(event) {
    const element = event.target;         
    const items = event.item.count;     
    const item = event.item.index + 1;    
   
   $('#counter').html("0"+item+"/0"+items)
 } 

const accordion = document.querySelectorAll("#accordion");

accordion.forEach(acc => {
  acc.addEventListener("click", function() {
    acc.children[1].classList.toggle("active")
  })
})

const bars = document.getElementById('bars');
const mobileMenu = document.getElementById('mobile-menu');

bars.addEventListener('click', () => mobileMenu.classList.toggle('active'))