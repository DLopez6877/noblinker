$( document ).ready(function() {
    $('.start').click(function() {
        var play = setInterval(playGame, 700);
        var backgroundChange = setInterval(changeBackground, 100);
        $('#startPanel').hide();
        $('#finishPanel').hide();
        $('#noBlinker').css('display', 'block');
        $('#noBlinker').click(function() {
            clearInterval(play);
            clearInterval(backgroundChange);
            $('body').css('background', 'white');
            $('#noBlinker').hide();
            $('#finishPanel').show();
        });
    });
    
    var playGame = function() {
        var randomHeight = Math.floor(Math.random() * $('body').height()) + 1;
        var randomWidth = Math.floor(Math.random() * $('body').width()) + 1;
        
        $('#noBlinker').css({
            'top': `${randomHeight}px`,
            'left': `${randomWidth}px`
        });
    }

    var changeBackground = function() {
        var random1 = Math.floor(Math.random() * 255) + 1;
        var random2 = Math.floor(Math.random() * 255) + 1;
        var random3 = Math.floor(Math.random() * 255) + 1;
        $('body').css({'background': `rgb(${random1},${random2},${random3})`});
    }
});