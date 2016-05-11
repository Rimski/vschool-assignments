var callList = ["LeRoy", "Jimmy", "Snaniqua", "Carrol", "Dexter", "George W. Bush", "Empire", "Frank", "Paris", "Schmit"];





callList.forEach(function (value, index, array) {
        attemptCall(callName, dontCall, call);
    }

    function dontCall(name) {
        console.log("You didn't call " + name);
    }

    function call(name) {
        console.log("You called " + name);
    }

    function sendText(name) {
        dubble Array = [];

    }

    function attemptCall(name, dontCall, call, sendText) {
        if (!name.length % 2 === 0) {
            dontCall(name);
        } else if (name.length % 2 === 0) {
            call(name);
        } else if (!name.indexOf("a") === name.lastIndexOf("a"))
            console.log("You texted " + name)
    }
}