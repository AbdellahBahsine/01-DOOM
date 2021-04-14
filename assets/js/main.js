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
    var element   = event.target;         // DOM element, in this example .owl-carousel
     var items     = event.item.count;     // Number of items
     var item      = event.item.index + 1;     // Position of the current item
   
   // it loop is true then reset counter from 1
   if(item > items) {
     item = item - items
   }
   $('#counter').html("0"+item+"/0"+items)
 }
 