 // Custom JS
 
$(document).ready(function() {
    "use strict"; // Start of use strict


    // MagnificPopup
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
        
    });

    $('.image-popup-fit-width').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });

    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });


    // Portfolio Gallery
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        $(".filter-button").removeClass("filter-button-active").addClass("btn-default");
        $(this).removeClass("btn-default").addClass("filter-button-active");
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });


    // Counter 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // Video popup form youtube
    $('#popup-youtube').magnificPopup({
      items: {
           src: 'https://www.youtube.com/watch?v=9QscURRuF0g'
         },
      type: 'iframe',
      iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>', 
            patterns: {
                youtube: {
                    index: 'youtube.com/', 
                    id: 'v=', 
                    src: '//www.youtube.com/embed/%id%?autoplay=1' 
                }
             },
             srcAction: 'iframe_src', 
         }
    });

    // Back To Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // sending message
    $('#msg-sending-form').submit(function(event){
        event.preventDefault();
        $('#msg-sending-btn').attr('disabled','disabled').html('<i class="fa fa-spinner fa-pulse fa-fw"></i> Sending...');
        var method = $(this).attr('method');
        var action = $(this).attr('action');
        $.ajax({
            url:action,
            type:method,
            dataType:'json',
            data:$(this).serialize(),
            success:function(res) {
                if(res.status == 'success') {
                    $('#msg-status-content').html('<h3 class="text-success text-center">'+res.msg+'</h3>');
                    $('#msg-sending-form')[0].reset();
                }
                else {
                    $('#msg-status-content').html('<h3 class="text-danger text-center">'+res.msg+'</h3>');
                }
                $('#msg-sending-status-modal').modal({'backdrop':'static'});
                $('#msg-sending-btn').removeAttr("disabled").text('SEND MESSAGE');

            }
        });
    });

}); // End of use strict



// Preloader
$(window).on('load', function() {
    var preloader = $('#preloader div');
    preloader.fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
});


