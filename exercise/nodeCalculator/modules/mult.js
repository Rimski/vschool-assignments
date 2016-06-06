function Multiplier() {
    this .mult = function(x, y) {
        console.log(x * y);
    }
}
module.exports = new Multiplier();