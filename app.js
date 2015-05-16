var main = function() {
    /* Push the body and the nav over by 285px over */
    $('.icon-email').click(function() {
        $('.email').animate({
            left: "0px"
        }, 200);

        $('body').animate({
            left: "285px"
        }, 200);
    });

    /* Then push them back */
    $('.icon-back').click(function() {
        $('.email').animate({
            left: "-285px"
        }, 200);

        $('body').animate({
            left: "0px"
        }, 200);
    });

    $('.article').click(function(){
        $('.article').removeClass('current');
        $('.description').hide();
        $(this).addClass('current');
        $(this).children('.description').show();
    });
    $(document).keypress(function(event){
        if (event.which === 111){
            $('.current').children('.description').toggle();
        }
        else if (event.which === 110){
            var currentArticle = $('.current');
            var nextArticle = currentArticle.next();
            currentArticle.removeClass('current');
            nextArticle.addClass('current');
        }
    });
    $('.btn').click(function() {
        if ($(this).text === "New") {
            $('<li>').text('New Mail').prependTo('.article');
        }

    });
};


$(document).ready(main);
