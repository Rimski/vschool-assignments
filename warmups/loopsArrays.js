    function createEvenArray(x) {
        var evenArray = [];
        for (var i = 0; i <= x; i++) {
            if (i % 2 === 0) {
                evenArray.push(i);

            }
        }
        return evenArray;
    }

    function addOdds(array) {
        var numArray = []

        for (var j = 0; j < array.lastIndexOf; j++) {
            if (!j % 2 === 0) {
                numArray.push(j);
            }
        }
        finalArray = array.concat(array);
        return finalArray;
    }
    console.log(addOdds(createEvenArray(20)));
    //function sortNums(numberArray) {
    //    return numberArray.sort(funtion(a, b) {
    //        return a - b
    //    });
    //}