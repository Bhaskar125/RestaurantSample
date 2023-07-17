$(document).ready(function() {

    /* Fro the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction =="down") {
                $('nav').addClass('sticky');
         } else {
                $('nav').removeClass('sticky');
            
            }

    },{
        offset: '60px;'
    });



    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top}, 1000);
        
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top}, 1000);
        
    }); 

   
    /* Navigation Scroll */
    // Scroll to specific values
    // scrollTo is the same
    window.scroll({
        top: 2500,
        left: 0,
        behavior: 'smooth'
    });

    // Scroll certain amounts from current position 
    window.scrollBy({
        top: 100, // could be negative value
        left: 0,
        behavior: 'smooth'
    });

    // Scroll to a certain element
    document.querySelector('.hello').scrollIntoView({
        behavior: 'smooth'
    });


    /* Animations on scroll */

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /* MOBILE NAVIGATION */

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');

        nav.slideToggle(200);
    });


}); 