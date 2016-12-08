/*==============================
       OWL CLIENT ACTIVATION
   ==============================*/
   (function($){
       var owl = $("#client");
       owl.owlCarousel({
            items : 5,
            itemsDesktop : [1000,5],
            itemsDesktopSmall : [900,3],
            itemsTablet: [600,1],
            itemsMobile : false
        });
       $(".client-next").click(function(){
           owl.trigger('owl.next');
       })
       $(".client-prev").click(function(){
           owl.trigger('owl.prev');
       })
   })(jQuery);
