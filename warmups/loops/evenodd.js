function oddEven() {
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            console.log("even");
        } else if (!i % 2 === 0) {
            console.log("odd");
        }
    }
}
oddEven();