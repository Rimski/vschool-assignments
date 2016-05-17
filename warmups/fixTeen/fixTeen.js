//noTeenSum(1, 2, 3) → 6 
//noTeenSum(2, 13, 1) → 3 
//noTeenSum(2, 1, 14) → 3 
//noTeenSum(2, 15, 14) → 17
// split this to send to fix teen
function noTeenSum(callback, x, y, z) {
    x = callback(x);
    y = callback(y);
    z = callback(z);
    return (x + y + z); 
};
// make more broad only one variable
function fixTeen(n) {
    if (n > 10 && n < 15 && n > 16 && n < 20) {
        n = 0
    }
        if (n === 15 || n === 16) {
        n - 10
    }
    return (n);
}
console.log(noTeenSum(fixTeen, 2, 13, 1));