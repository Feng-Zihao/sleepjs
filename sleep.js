

sleep = function(milliseconds) {
    var wrapper = function() {
        var delay_list = [];
        var callback_list = [];
        var _run = function() {
            if (callback_list.length === delay_list.length - 1) {
                callback_list.push(function() {});
            }
            for (var i = 1; i < delay_list.length; i++) {
                delay_list[i] = delay_list[i - 1] + delay_list[i];
            }
            for (var i = 0; i < delay_list.length; i++) {
                setTimeout(callback_list[i], delay_list[i]);
            };
        };
        var _sleep = function(milliseconds) {
            delay_list.push(milliseconds);
            return {
                then: _then,
                run   : _run
            };
        };
        var _then = function(callback) {
            callback_list.push(callback);
            return {
                sleep: _sleep,
                run  : _run
            };
        };
        return {
            sleep: _sleep
        }
    }
    return new wrapper().sleep(milliseconds);
};


