/*
    Theme Name: 9ci project
    Theme URI: 
    Author: Artemas technologies
    Author URL: http://artemasdigital.com/
    Description: 9ci 2016.
	Document   : Framework
	Created on : June 16, 2016, 11:51:00 AM
    */
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;


$(document).ready(function() {
    
    $('.close_menu').each(function (index, element) {
  $(this).addClass("animated slideInDown");
});   

    $('.banner_slide').bxSlider({
        auto: true,
        nextText: '',
        prevText: '',
        speed: 1000,
        easing: 'swing'
    });
    $('.slider1').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0
    });
    
    var maxSlides;
    var slideWidth;
    width = $(window).width();
    
    
    if (width <= 440) {
        
        maxSlides = 1;
        slideWidth = 300;
    }else if(width <= 685 ) {
        
        maxSlides = 2;
        slideWidth = 200;
    }else if(width <= 990 ) {
        
        maxSlides = 2;
        slideWidth = 180;
    }else if(width <= 1025 ) {
        
        maxSlides = 4;
        slideWidth = 170;
    }else if(width <= 1600){
        
        maxSlides = 4;
        slideWidth = 170;
    }else if(width >= 1601){
        
        maxSlides = 4;
        slideWidth = 205;
    }
    
    $('.slider2').bxSlider({
        slideWidth: slideWidth,
        minSlides: 1,
        maxSlides: maxSlides,
        slideMargin: 0
    });
    
     var controller = new slidebars();
controller.init();
 $( '.js-toggle-right-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'slidebar-2' );
    } );
    $( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
        event.stopPropagation();
        controller.close();
    } );
    $( controller.events ).on( 'opened', function () {
        $( '[canvas="page"]' ).addClass( 'js-close-any-slidebar' );
        $( 'body' ).addClass( 'js-close-custom' );
    } );

    $( controller.events ).on( 'closed', function () {
        $( '[canvas="page"]' ).removeClass( 'js-close-any-slidebar' );
        $( 'body' ).removeClass( 'js-close-custom' );
    } );
    
    
});

$(window).scroll(function() {

    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".header").addClass("bg_change");
            $('.bg_change').each(function (index, element) {
                $(this).addClass("animated slideInDown");
});  
    } else {
        $(".header").removeClass("bg_change animated slideInDown");
    
    }
    if (scroll >= 100) {
        $("body").addClass("menu_close");
    } else {
        $("body").removeClass("menu_close");
       
    }
        if(isMobile==false){
$('.great_solutions li').each(function (index, element) {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
        $(this).delay(index * 300).queue(function () {
            $(this).closest('li').addClass("animated fadeInUp").dequeue();
        });
    }
});

$('.solution_block li').each(function (index, element) {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
        $(this).delay(index * 300).queue(function () {
            $(this).closest('li').addClass("animated fadeInUp").dequeue();
        });
    }
});

$('.client_logo ul li').each(function (index, element) {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 900) {
        $(this).delay(index * 100).queue(function () {
            $(this).closest('li').addClass("animated fadeInUp").dequeue();
        });
    }
});

$('.schedule_sec .container').each(function (index, element) {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
        $(this).delay(index * 300).queue(function () {
            $(this).addClass("animated fadeInUp").dequeue();
        });
    }
});
    
    $('.medium').each(function (index, element) {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
        $(this).delay(index * 300).queue(function () {
            $(this).addClass("animated fadeIn").dequeue();
        });
    }
});    
    
    $('.great_solutions h2, .great_solutions h2 span ').each(function (index, element) {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
        $(this).delay(index * 300).queue(function () {
            $(this).addClass("animated fadeIn").dequeue();
        });
    }
});   
    $('.work_sec h2, .work_sec h2 span ').each(function (index, element) {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
        $(this).delay(index * 300).queue(function () {
            $(this).addClass("animated fadeIn").dequeue();
        });
    }
});    
            
        $('.how_to_help h2, .how_to_help h2 span ').each(function (index, element) {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
        $(this).delay(index * 300).queue(function () {
            $(this).addClass("animated fadeIn").dequeue();
        });
    }
});

$('.how_to_help li ').each(function (index, element) {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
        $(this).delay(index * 100).queue(function () {
            $(this).closest('li').addClass("animated fadeInUp").dequeue();
        });
    }
});

    $('.circle_segment_1').each(function (index, element) {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
        $(this).delay(index * 200).queue(function () {
            $(this).addClass("animated fadeInDown").dequeue();
        });
    }
});
$('.circle_segment_2').each(function (index, element) {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
        $(this).delay(index * 400).queue(function () {
            $(this).addClass("animated fadeInRight").dequeue();
        });
    }
});

$('.circle_segment_3').each(function (index, element) {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
        $(this).delay(index * 200).queue(function () {
            $(this).addClass("animated fadeInLeft").dequeue();
        });
    }
});

$('.circle_segment_4').each(function (index, element) {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
        $(this).delay(index * 400).queue(function () {
            $(this).addClass("animated fadeInUp").dequeue();
        });
    }
});

$('.solution_des').each(function (index, element) {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
        $(this).delay(index * 100).queue(function () {
            $(this).addClass("animated fadeInUp").dequeue();
        });
    }
});  
        }
 
});