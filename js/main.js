(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    //navbar close when the links gets clicked
    $(document).ready(function () {
        $('.navbar-nav a').click(function () {
            $('.navbar-collapse').collapse('hide');
        });
    });
    $(document).ready(function() {
        // Initialize Isotope
        var $gallery = $('.gallery').isotope({
            itemSelector: '.gallery-item',
            layoutMode: 'fitRows'
        });
    
        // Filter items on button click
        $('.filter-btn').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $gallery.isotope({ filter: filterValue });
        });
    
        // Optionally initialize Lightbox
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        });
    });
    
    
    
    // Initiate the wowjs
    new WOW().init();


    function openLightbox() {
        document.getElementById('lightbox').style.display = 'block';
      }
      
      function closeLightbox() {
        document.getElementById('lightbox').style.display = 'none';
      }
      
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    
    
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


//close modal after clicking those links
document.addEventListener("DOMContentLoaded", function() {
    var modalLinks = document.querySelectorAll('.modal .modal-body a.btn');
    modalLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var modal = this.closest('.modal');
            if (modal) {
                $(modal).modal('hide'); // Bootstrap 4 jQuery method to close modal
            }
        });
    });
});
