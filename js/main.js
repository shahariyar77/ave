$(document).ready(function(){
    /*========slick nav js=========*/
   $(".main-manu").slicknav({
        prependTo:'.mobile-manu-wrap',
        allowParentLinks:true
    });
    $(".potfulio-list").isotope({
    });
    
    $(".filter-project li").on('click', function(){
        $(".filter-project li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".potfulio-list").isotope({
            filter: selector,
            
        });
    });
    
    $(".potfulio-list-2").isotope({
        
    });
    
    $(".filter-project li").on('click', function(){
        $(".filter-project-2 li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".potfulio-list-2").isotope({
            filter: selector,
            layoutMode:'fitROWS'
            
            
        });
    });
$(".view-carousel").owlCarousel({
    items:1,
    loop:true,
    nav:true,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    autoplay:false,
    dots:false,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }

});






});