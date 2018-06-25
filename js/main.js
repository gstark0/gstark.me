document.body.className += ' fade-out';

var NavOpened = false;

function openNav() {
    NavOpened = true;
    $('#sidenav').css('width', '390px');
}

function closeNav() {
    NavOpened = false;
    $('#sidenav').css('width', '0');
}
        
$(window).scroll(function () {
    
    if($(this).scrollTop() > 600) {
        $('header').addClass('shrink');
        $('.closebtn').addClass('shrink');
    } else {
        $('header').removeClass('shrink');
        $('.closebtn').removeClass('shrink');
    }
});

$('.modal-opener').click(function(event){
    $('body').css('overflow', 'hidden');
    $('#' + $(this).attr('data-name') + '-modal').css('display', 'block');
    $('body > *:not(.work-modal)').css('overflow-y', 'hidden');
});

$('.work-modal-close').click(function() {
    $('body').css('overflow', 'auto');
    $('.work-modal').css('display', 'none');
    $('body > *:not(.work-modal)').css('overflow-y', 'scroll');
});

$(function() {
    $('body').removeClass('fade-out');
    $("a").on('click', function(event) {
        if(NavOpened) {
            NavOpened = false;
            $('#sidenav').css('width', '0');
        }
        if(this.hash !== "") {

            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });

        }
    });
});