var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (xhttp.readyState >= 4 && xhttp.status >= 200) {
        //        var names = [];
        var data = (xhttp.responseText);
        var newData = JSON.parse(data).objects[0].pokemon;
        for (var i = 0; i < newData.length; i++) {
            var hOne = document.createTextNode(newData[i].name + "  ");
            document.body.appendChild(hOne);
            console.log("Getting request");
        }
    }
    console.log("No Thanks");
};
xhttp.open("GET", "http://mean.codingcamp.us:6543/pokemon.json", true);
xhttp.send();