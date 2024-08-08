jQuery(document).ready(function($) {
    jQuery('img').removeAttr('width').removeAttr('height');  

    jQuery(document).on("click",".Schedule_time",function(){
  
        jQuery("#myModal").modal("toggle");
        
      });

      $('#myModal').on('shown.bs.modal', function (e) {
        // Add your custom class to the HTML
        jQuery('html').addClass('modal-popup-open');
    });
    
    $("#myModal").on("hidden.bs.modal", function () {
        jQuery('html').removeClass('modal-popup-open');
    });

    jQuery('.read-more-link').on('click', function (e) {
        e.preventDefault();
        var $testimonialContent = jQuery(this).closest('.testimonial').find('.testimonial-content');
        $testimonialContent.find('.limited-content').toggle();
        $testimonialContent.find('.full-content').toggle();
        jQuery(this).toggle();
    });

    $('#toggleButton').on('click', function() {
        $('.additional-box').slideToggle();
        $('.seeMore').hide();
        // $(this).text(function(i, text) {
        //     return text === 'Show Less' ? 'Show More' : 'Show Less';
        // });
    });

})

// Get the current date
var currentDate = new Date();

// Add 2 days to the current date
var futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 2);

// Format the future date as desired
var formattedFutureDate = futureDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long'

});

//Display the result
var formattedcurrentDate = currentDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long'

});
jQuery('.date_after').text(formattedFutureDate);


//console.log("The date 2 days later is " + formattedFutureDate);

 jQuery(document).ready(function () {
    jQuery('#calculate_now').click(function () {
        // Call the calculation function
        calculateAmount();
    });

    // Add comma on input change and restrict to 9 digits
    jQuery('#amount').on('input', function () {
        var value = jQuery(this).val().replace(/[^\d]/g, ''); // Remove non-numeric characters
        value = value.substring(0, 7); // Restrict to 9 digits
        var formattedValue = addCommas(value);
        jQuery(this).val(formattedValue);
        jQuery('#field_error_msg').text('');
    });

    // Add comma on input change and restrict to 9 digits
    jQuery('#banner_input').on('input', function () {
        var value = jQuery(this).val().replace(/[^\d]/g, ''); // Remove non-numeric characters
        value = value.substring(0, 7); // Restrict to 9 digits
        var formattedValue = addCommas(value);
        jQuery(this).val(formattedValue);
    });

});

// Function to add commas to a number
function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Function for the calculation
function calculateAmount() {
    // Get the amount, multiply by 0.015, and multiply by the number of weeks
    var amount = jQuery('#amount').val().replace(/,/g, ''); // Remove commas
    var numOfWeek = jQuery('#num_of_week').val();

    // Validate for null or empty values
    if (amount === '' || numOfWeek === '') {
        jQuery('#field_error_msg').text('Please enter valid values for amount.');
        return;
    }

    // Parse values to float and int
    amount = parseFloat(amount);
    numOfWeek = parseInt(numOfWeek);

    // Check for NaN (Not a Number)
    if (isNaN(amount) || isNaN(numOfWeek)) {
        jQuery('#field_error_msg').text('Please enter valid numeric values for amount.');
        return;
    }
    jQuery('#field_error_msg').text('');
    // Perform the calculation
    var result = amount * 0.015 * numOfWeek;
    var formattedResult = result.toFixed(2);
    formattedResult = formattedResult.replace(/\.00$/, '');
    var characterCount = formattedResult.length;
        if(characterCount > 6){ jQuery('#loan_amount').addClass('big_amount');}else {jQuery('#loan_amount').removeClass('big_amount');}
    // Append the result to the "loan_amount" div
    jQuery('#loan_amount').text('$' + addCommas(formattedResult));
   
   jQuery('#loan_cost').removeClass('hide_cost');
    jQuery('#loan_cost').slideDown("slow");
    
    

    // Display the result or perform further actions
    //alert('Calculated Result: ' + addCommas(result) );

    //jQuery('.date_after').text(formattedFutureDate);
}


jQuery('#trusted-payroll').owlCarousel({
loop:true,
margin:30,
items: 8,
autoplay: true,
slideTransition: 'linear',
autoplayTimeout: 2500,
autoplaySpeed: 2500,
nav:false,
dots: false,
responsive:{
    0:{
        items:1,
        margin: 0
    },
    320:{
        items:2,
        margin: 10
    },
    575:{
        items:3,
        margin: 10
    },
    768:{
        items:4,
        margin: 10
    },
    991:{
        items:5,
        margin: 10
    },
    1200:{
        items:6,
        margin: 30
    },
    1366:{
        items:8,
        margin: 30
    }
}
});

jQuery('#homeTestimonial').owlCarousel({
loop:true,
margin:20,
items: 4,
autoplay:false,
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
    991.5:{
        items:3,
        margin:10
    },
    1199:{
        items:4,
        margin: 20
    }
}
})

jQuery(function() {
    function toggleElement(target) {
        jQuery('.dropMenu-box').not('#div' + target).hide('slow');
        jQuery('#div' + target).toggle('slow');
    }
    jQuery('.responsive-icon').click(function() {
        var target = jQuery(this).attr('target');
        toggleElement(target);
    });
    // jQuery('.subMenu2').click(function() {
    //     var target = jQuery(this).attr('target');
    //     toggleElement(target);
    // });
});

jQuery(function(){
    function toggleElement(target) {
        jQuery('.subMenu').not('#div' + target).hide('slow');
        jQuery('#div' + target).toggle('slow');
    }
    jQuery('.subMenu2').click(function() {
    var target = jQuery(this).attr('target');
    toggleElement(target);
});
});


/****Testimonial slider**** */
$('#oneTesti-slid').owlCarousel({
    loop:true,
    margin:30,
    items: 4,
    autoplay: true,
    centerMode:true,
    swipe: false,
    infinite: true,
	slideTransition: 'linear',
	autoplayTimeout: 8000,
	autoplaySpeed: 8000,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1,
            margin:0
        },
        575:{
            items:2,
            margin:10
        },
        768:{
            items:3,
            margin:10
        },
        991:{
            items:3,
            margin:10
        },
        1280:{
            items:4,
            margin:20
        }
    }
});



$('#twoTesti-slid').owlCarousel({
    loop:true,
    margin:30,
    items:4,    
    swipe: false,
    autoplay:true,
    // rtl:true,
    infinite: true,
	slideTransition:'linear',
	autoplayTimeout:8000,
	autoplaySpeed:8000,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1,
            margin:0
        },
        575:{
            items:2,
            margin:10
        },
        768:{
            items:3,
            margin:10
        },
        991:{
            items:3,
            margin:10
        },
        1280:{
            items:4,
            margin:20
        }
    }
});
/****Testimonial slider**** */

$(document).ready(function() {
	var $btns = $('.btn').click(function() {
	  if (this.id == 'all') {
	    $('#parent > div').fadeIn(450);
	  } else {
	    var $el = $('.' + this.id).fadeIn(450);
	    $('#parent > div').not($el).hide();
	  }
	  $btns.removeClass('active');
	  $(this).addClass('active');
	})
});

jQuery(function($) {
    let canBeLoaded = true; // this param allows to initiate the AJAX call only if necessary
    const bottomOffset = 2000; // the distance (in px) from the page bottom when you want to load more posts
    var page = 0;

    $(window).scroll(function() {
        const data = {
            'action': 'loadmore',
            'query': infinite_scroll_params.posts,
            'default_product_listing_number' : infinite_scroll_params.default_product_listing_number,
            'load_number_of_products' : infinite_scroll_params.load_number_of_products,
            'page' : page,
            'total_post' : infinite_scroll_params.total_post,
        }
        
                                        
        if ($(document).scrollTop() > ($(document).height() - bottomOffset) && canBeLoaded == true) {
            $.ajax({
                url: infinite_scroll_params.ajaxurl,
                data: data,
                type: 'POST',
                beforeSend: function(xhr) {
                    // you can also add your own preloader here
                    // you see, the AJAX call is in process, we shouldn't run it again until complete
                    canBeLoaded = false;
                    //alert((infinite_scroll_params.total_post -3)+'-'+page);
                    if(page!= (infinite_scroll_params.total_post -3)){
                    $('#parent').append('<div id="misha_loadmore" class="misha_loadmore">More posts</div>');
                    }
                },
                success: function(data) {
                    if (data) {
                        $('#parent').append(data); // where to insert posts
                        $('.misha_loadmore').addClass('hide');
                        canBeLoaded = true; // the ajax is completed, now we can run it again
                        page++;
                    }
                }
            })
        }
    })
})

/*************************************** */
jQuery('#pyrllTestimonial').owlCarousel({
    loop: false,
    margin: 20,
    items: 4,
    autoplay: false,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        768: {
            items: 2,
            margin: 10
        },
        991.5: {
            items: 3,
            margin: 10
        },
        1199: {
            items: 3,
            margin:20, // Adjust the margin to create space for the right side half
            stagePadding:100 // Adjust the stagePadding to move the slider to the left
        }
    }
});



          