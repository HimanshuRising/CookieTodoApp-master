$(document).ready(function () {


    //Smoothly hide the completed tasks
    $('.items :checkbox').on('click', function () {
        $(this).parentsUntil('.items').fadeOut(500, function () {
            $(this).css({
                "visibility": "hidden",
                display: 'block',
                padding: '0'
            }).slideUp();
            $(this).closest('.items').css({
                padding: '0'
            });
        });
    });


    //Säkerhetsställ att alla bockarna är borta
    $('.btn-check.btn-default').removeClass('active');


    //Slide down small input
    $('#mainInput').focus(function () {
        $('#inputSmall').css({
            opacity: 1
        });
        $('#inputSmall').slideDown(400);
    });
    $('form').find('input[type=submit]').on('click', function() {
         $('#inputSmall').slideUp(400);
    });
    
    // Dölj det lilla fältet
    $('.glyphicon-remove-sign').hover(function(){
        $(this).css({'background-color': '95a5a6', 'border-color': '95a5a6', 'color': 'FFFFFF'});
                                    }, function() {
         $(this).css({'background-color': 'ecf0f1', 'border-color': 'dce4ec', 'color': '000000'})
    });
    $('.glyphicon-remove-sign').on('click', function(){
        $('#inputSmall').slideUp(400);
    });
    
    // Hamburgemeny
    $('.btn.btn-default.center-pills').on('click', function () {
        $('.arrow_box').toggleClass('hide');
        $('.toggle-content').slideToggle();
    });

    
    //Hamburgemeny, stäng om något klickas på
    $('.toggle-content').find('a').on('click', function() {
        $('.arrow_box').addClass('hide');
        $('.toggle-content').slideUp();
    });

    //Hamburgermeny - conirm
    var oldClean, oldSession;
    $('a.confirm').hover(function () {
        var text = '<span class="glyphicon glyphicon-exclamation-sign"></span> <span class="hidden-sm hidden-xs">Are you sure?</span>';
        if($(this).hasClass("clean")){
            oldClean = $(this).html();
        } else {
            oldSession = $(this).html();
        }
        $(this)
            .addClass('btn-danger')
            .removeClass('btn-default')
            .html(text);
    }, function() {
        $(this).removeClass('btn-danger').addClass('btn-default');
        
        if ($(this).hasClass("clean")) {
                $(this).html(oldClean);
        } else {
            $(this).html(oldSession);
        }
        });




    //Navigation
    $('ul.nav-pills li').on('click', function () {
        $('ul.nav-pills li').removeClass('active');
        $(this).addClass('active');
    });
});