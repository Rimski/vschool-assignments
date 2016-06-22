//Write a JavaScript function to convert an amount to coins
function coins(x, array) {
    array.sort(function (a, b) {
        return b - a;
    });
    var change = [];
    var total = x;
    for (var i = 0; i < array.length; i++) {
        var mod = (total / array[i] % 1);
        var times = (total / array[i]);
        if (total > 0) {
            total = total - (array[i] * (times - mod));
            for (var j = 0; j < (times - mod); j++) {
                change.push(array[i]);
            };
        } else {
            break;
        };
    }
    return change;
}

console.log(coins(124, [25, 10, 5, 1]))