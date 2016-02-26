$(document).ready(function() {

// sticky nav bar

    var stickyNav = $('nav').offset().top;

    $('nav').wrap('<div class="nav-placeholder"></div>');
    $('.nav-placeholder').height($('nav').outerHeight());

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNav) {
           $('nav').addClass('fixed');
        } else {
           $('nav').removeClass('fixed');
       };
   });

// arrow-down slider in introduction

   $('#arrow-down').click(function() {
       $('html, body').animate({scrollTop: $('.header').height()}, 800);
   });

// scroll to destination on click

   $('html').localScroll({duration:800});

// team section buttons left - right

    $('#left').addClass('hidden');

    var arrows = function (max) {

        var click = 0;

        var moveRight = function() {
            $('.team').animate({ 'marginLeft' : '+=200px' });
        };

        var moveLeft = function() {
            $('.team').animate({ 'marginLeft' : '-=200px' });
        };

        $('#right').click(function () {
            $('#left').removeClass('hidden');
            if (click == max) {
                $('#right').addClass('hidden');
                click++;
                moveLeft();
                return;
            };
            click++;
            moveLeft();
        });

        $('#left').click(function () {
            $('#right').removeClass('hidden');
            if (click == 1) {
                $('#left').addClass('hidden');
                click--;
                moveRight();
                return;
            };
            click--;
            moveRight();
        });
    }

    if($(window).width() > 799) {

        arrows(5);

    } else if($(window).width() > 499) {

        arrows(6);

    } else {

        arrows(7);

    }

// no focus on buttons after clicking

    $('button').mouseup(function(){
        $(this).blur();
    });

// slider for testimonials

    $('#dot1').addClass('active');

    if($(window).width() > 799) {

        $('#dot1').click(function() {
            $('.quotes').animate({ 'marginLeft' : '0px' });
            $("*").removeClass('active');
            $(this).addClass('active');
        });
        $('#dot2').click(function() {
            $('.quotes').animate({ 'marginLeft' : '-600px' });
            $("*").removeClass('active');
            $(this).addClass('active');
        });
        $('#dot3').click(function() {
            $('.quotes').animate({ 'marginLeft' : '-1200px' });
            $("*").removeClass('active');
            $(this).addClass('active');
        });
        $('#dot4').click(function() {
            $('.quotes').animate({ 'marginLeft' : '-1800px' });
            $("*").removeClass('active');
            $(this).addClass('active');
        });
        $('#dot5').click(function() {
            $('.quotes').animate({ 'marginLeft' : '-2400px' });
            $("*").removeClass('active');
            $(this).addClass('active');
        });

    } else if($(window).width() > 499) {

        $('#dot1').click(function() {
            $('.quotes').animate({ 'marginLeft' : '0px' });
            $("*").removeClass('active');
            $(this).addClass('active');
        });
        $('#dot2').click(function() {
            $('.quotes').animate({ 'marginLeft' : '-400px' });
            $("*").removeClass('active');
            $(this).addClass('active');
        });
        $('#dot3').click(function() {
            $('.quotes').animate({ 'marginLeft' : '-800px' });
            $("*").removeClass('active');
            $(this).addClass('active');
        });
        $('#dot4').click(function() {
            $('.quotes').animate({ 'marginLeft' : '-1200px' });
            $("*").removeClass('active');
            $(this).addClass('active');
        });
        $('#dot5').click(function() {
            $('.quotes').animate({ 'marginLeft' : '-1600px' });
            $("*").removeClass('active');
            $(this).addClass('active');
        });

    } else {

        $('#dot1').click(function() {
            $('.quotes').animate({ 'marginLeft' : '0px' });
            $("*").removeClass('active');
            $(this).addClass('active');
        });
        $('#dot2').click(function() {
            $('.quotes').animate({ 'marginLeft' : '-200px' });
            $("*").removeClass('active');
            $(this).addClass('active');
        });
        $('#dot3').click(function() {
            $('.quotes').animate({ 'marginLeft' : '-400px' });
            $("*").removeClass('active');
            $(this).addClass('active');
        });
        $('#dot4').click(function() {
            $('.quotes').animate({ 'marginLeft' : '-600px' });
            $("*").removeClass('active');
            $(this).addClass('active');
        });
        $('#dot5').click(function() {
            $('.quotes').animate({ 'marginLeft' : '-800px' });
            $("*").removeClass('active');
            $(this).addClass('active');
        });

    }

// extending button watch more content

    $('.toggle-more-less').click(function() {
        if($('.gallery-container').hasClass('less', 500)) {
            $('.gallery-container').switchClass('less', 'more', 500);
            $('.toggle-more-less').text("Watch less");
        } else {
            $('.gallery-container').switchClass('more', 'less', 500);
            $('.toggle-more-less').text("Watch more");
        };
    });

// gallery content selection via all / apps / web / icons buttons

    $('.fancybox').attr('rel', 'gal');
    $('#all-button').addClass('portfolio-focus');

    $('#all-button').click(function() {
        $('.gallery-item').css({ 'display' : 'inline-block' });
        $('.toggle-more-less').css({'display' : 'inline-block'});
        $('.fancybox').removeAttr('rel');
        $('.fancybox').attr('rel', 'gal');
        $('.portfolio > li').removeClass('portfolio-focus');
        $('#all-button').addClass('portfolio-focus');
    });
    $('#web-button').click(function() {
        $('.gallery-item').css({ 'display' : 'inline-block' });
        $('.gallery-item').not('.web').css({ 'display' : 'none' });
        if($(window).width() > 799) {
            $('.toggle-more-less').css({'display' : 'none'});
        }
        $('.fancybox').removeAttr('rel');
        $('.web .fancybox').attr('rel', 'gal');
        $('.portfolio > li').removeClass('portfolio-focus');
        $('#web-button').addClass('portfolio-focus');
        if($('.gallery-container').hasClass('more', 500)) {
            $('.gallery-container').switchClass('more', 'less', 500);
            $('.toggle-more-less').text("Watch more");
        }
    });
    $('#apps-button').click(function() {
        $('.gallery-item').css({ 'display' : 'inline-block' });
        $('.gallery-item').not('.apps').css({ 'display' : 'none' });
        if($(window).width() > 799) {
            $('.toggle-more-less').css({'display' : 'none'});
        }
        $('.fancybox').removeAttr('rel');
        $('.apps .fancybox').attr('rel', 'gal');
        $('.portfolio > li').removeClass('portfolio-focus');
        $('#apps-button').addClass('portfolio-focus');
        if($('.gallery-container').hasClass('more', 500)) {
            $('.gallery-container').switchClass('more', 'less', 500);
            $('.toggle-more-less').text("Watch more");
        }
    });
    $('#icons-button').click(function() {
        $('.gallery-item').css({ 'display' : 'inline-block' });
        $('.gallery-item').not('.icons').css({ 'display' : 'none' });
        if($(window).width() > 799) {
            $('.toggle-more-less').css({'display' : 'none'});
        }
        $('.fancybox').removeAttr('rel');
        $('.icons .fancybox').attr('rel', 'gal');
        $('.portfolio > li').removeClass('portfolio-focus');
        $('#icons-button').addClass('portfolio-focus');
        if($('.gallery-container').hasClass('more', 500)) {
            $('.gallery-container').switchClass('more', 'less', 500);
            $('.toggle-more-less').text("Watch more");
        }
    });

// fancybox by fancyapps (http://fancyapps.com/fancybox/)

    $('.fancybox').fancybox();

// gallery for small screens

    $('#small-left').css({'display' : 'none'});

    var smallClick = 0;
    var smallMax = 7;

    var smallMoveRight = function() {
        $('.gallery').animate({ 'marginLeft' : '+=203px' });
    };

    var smallMoveLeft = function() {
        $('.gallery').animate({ 'marginLeft' : '-=203px' });
    };

    $('#small-right').click(function () {
        $('#small-left').css({'display' : 'inline'});
        if (smallClick == smallMax) {
            $('#small-right').css({'display' : 'none'});
            smallClick++;
            smallMoveLeft();
            return;
        };
        smallClick++;
        smallMoveLeft();
    });

    $('#small-left').click(function () {
        $('#small-right').css({'display' : 'inline'});
        if (smallClick == 1) {
            $('#small-left').css({'display' : 'none'});
            smallClick--;
            smallMoveRight();
            return;
        };
        smallClick--;
        smallMoveRight();
    });

});
