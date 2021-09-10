jQuery(function ($) {
    $(document).ready(function () {
        let timer = $('.timer');
        let intervals = new Array(timer.length);
        for (let i = 0; i < timer.length; i++) {
                intervals[i] = setInterval(function() {
                //by parsing integer, I avoid all extra string processing
                var minutes = parseInt($(timer[i]).find('.minute').html(), 10);
                var seconds = parseInt($(timer[i]).find('.seconds').html(), 10);
                --seconds;
                minutes = (seconds < 0) ? --minutes : minutes;
                if (minutes < 0) {
                    clearInterval(intervals[i]);
                    $(timer[i]).parents('.anket-item').addClass('expired');
                    let label = $(timer[i]).parents('.anket-item').find('.label-alert');
                    label.html('Просрочен');
                    label.addClass('label-expired');
                } else {
                    seconds = (seconds < 0) ? 59 : seconds;
                    seconds = (seconds < 10) ? '0' + seconds : seconds;
                    //minutes = (minutes < 10) ?  minutes : minutes;
                    $(timer[i]).find('.minute').html(minutes);
                    $(timer[i]).find('.seconds').html(seconds);
                    if(minutes < 15 && !$(timer[i]).hasClass('red')) {
                        $(timer[i]).addClass('red');
                    }
                }
            }, 1000);
        }
    });
});