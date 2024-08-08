$("header .header-main .navbar-toggler").click(function(){
    $("body").toggleClass("overflow-hidden");
});

$(".timeline-progress-block ul li").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

// Partner Slider

$('#partner_slider').owlCarousel({
    loop:true,
    margin:30,
    items: 4,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            margin: 0
        },
        768:{
            items:2,
            margin: 10
        },
        991:{
            items:3,
            margin: 30
        },
        1199:{
            items:4,
            margin: 30
        }
    }
})

// Testimonial Slider

$('#testimonial_slider').owlCarousel({
    loop:true,
    margin:0,
    items: 1,
    nav:false,
    autoplay: true,
    dots: true
})


// Mobile Responsive Silders

// Testimonial Slider

$('#launch_slider').owlCarousel({
    loop:false,
    margin:0,
    items: 1,
    nav:true,
    autoplay: false,
    dots: false
})

$('#pay_tomorrow_slider').owlCarousel({
    loop:true,
    margin:0,
    items: 1,
    nav:true,
    autoplay: false,
    dots: false
})

$('#team_slider').owlCarousel({
    loop:true,
    margin:0,
    items: 1,
    nav:true,
    autoplay: false,
    dots: false
})

//  header sticky
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("header").addClass("fixed");
    }
    else {
        $("header").removeClass("fixed");
    }
});

// -------------------------


// AOS.init({
//     disable: function() {
//       var maxWidth = 800;
//       return window.innerWidth < maxWidth;
//     }
// });

// AOS.init();

AOS.init({
    once: true,
});