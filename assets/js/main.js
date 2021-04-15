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
 