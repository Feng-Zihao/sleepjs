SleepJS
=======
A utility class for sleep for seconds. Zzzzzzzzz.
(Especially useful in testcase of JavaScript)

Purpose & Usage
=======
In most language, it's not hard to do something like
```
sleep(1000);    // in milliseconds
process_1
sleep(2000);
process_2
sleep(3000);
process_3
```

But in JavaScript, the only way is using setTimeout.
One will looks like
```
setTimeout(function() {
    process_1
    setTimeout(function() {
        process_2
        setTimeout(function() {
            process_3
        }, 3000);
    }, 2000);
}, 1000);
```
which is hard to understand the logic, and break your mind.


The other will looks like
```
setTimeout(function() {
    process_1
}, 1000);
setTimeout(function() {
    process_2
}, 3000);
setTimeout(function() {
    process_3
}, 6000);

```
which is hard to change time duration. Once you chage the time interval,
all delay need to be recalculated.


If you use SleepJS, you'll write
```
sleep(1000).then(function() {
    process_1
}).sleep(2000).then(function() {
    process_2
}).sleep(3000).then(function() {
    process_3
}).run();
```
which is natural to sequential logic and make your mind clear.
