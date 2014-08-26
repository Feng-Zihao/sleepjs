


SleepJS = (function() {
    var delay_list = [];
    var callback_list = [];
    var run = function() {
        if (callback_list.length === delay_list.length - 1) {
            callback_list.push(function() {});
        }
        for (var i = 1; i < delay_list.length; i++) {
            delay_list[i] = delay_list[i - 1] + delay_list[i];
        }
        console.log(delay_list);
        console.log(callback_list);

        // chain call to setTimeout
        for (var i = 0; i < delay_list.length; i++) {
            setTimeout(callback_list[i], delay_list[i]);
        };
    };
    var sleep = function(milliseconds) {
        delay_list.push(milliseconds);
        return {
            action: action,
            run   : run
        };
    };
    var action = function(callback) {
        callback_list.push(callback);
        return {
            sleep: sleep,
            run  : run
        };
    };
    return {
        sleep: sleep,
    };
})();;

SleepJS.sleep(1000).action(function() {
    console.log(1);
}).
sleep(1000).action(function() {
    console.log(2);
}).
sleep(1000).action(function(){
    console.log(3);
}).run();
