$(function(){  
    setInterval(function(){
        var now = new Date();

        var lasttimer = LastTimer(now);
        if ( lasttimer != 0 ) {
            $('.last-timer').html(
                '<span class="count day">' + lasttimer.day + '</span>' + 'day '  +
                '<span class="count hour">' + lasttimer.hour + '</span>' + 'hour ' + 
                '<span class="count minutes">' + lasttimer.minutes + '</span>'+ 'min ' +
                '<span class="count second">' + lasttimer.second + '</span>' + 'sec'
            );
        } else {
            $('.last-timer').html('Time is up....')
        }

        var middletimer = MiddleTimer(now);
        if ( middletimer != 0 ) {
            $('.middle-timer').html(
                '<span class="count">' + middletimer.day + '</span>' + 'day '  +
                '<span class="count">' + middletimer.hour + '</span>' + 'hour ' +
                '<span class="count">' + middletimer.minutes + '</span>' + 'min'
                // + '<span class="count">' + middletimer.second + '</span>' + 'sec'
            );
        } else {
            $('.middle-timer').html('Time is up....')
        }

    } , 1000 );
});

function MiddleTimer(now) {

    var middle_date = new Date(2018, 7, 11, 00, 00, 00);
    var diff = middle_date.getTime() - now.getTime();

    if ( diff < 0 ) {
        return 0;
    }

    var timer = getDate(diff);

    return timer;
}

function LastTimer(now) {

    var middle_date = new Date(2019, 1, 11, 00, 00, 00);
    var diff = middle_date.getTime() - now.getTime();

    if ( diff < 0 ) {
        return 0;
    }

    var timer = getDate(diff);

    return timer;
}

function getDate(diff) {
    var stime = 24 * 60 * 60 * 1000;
    var day = Math.floor( diff / stime );
    var hour = Math.floor(( diff % stime) / (60 * 60 * 1000));
    var minutes = Math.floor((diff % stime) / (60 * 1000)) % 60;
    var second = Math.floor((diff % stime) / 1000) % 60 % 60;

    return { day : day, hour : hour, minutes : minutes, second : second };
}
