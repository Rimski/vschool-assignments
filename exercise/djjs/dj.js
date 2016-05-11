var myBox = document.getElementById("myBox");

function greenColor() {
    myBox.style.backgroundColor = "green";
};

function redColor() {
    myBox.style.backgroundColor = "red"
};

function blueColor() {
    myBox.style.backgroundColor = "blue"
};

function yellowColor() {
    myBox.style.backgroundColor = "yellow"
};

function orangeColor() {
    myBox.style.backgroundColor = "orange"
};

myBox.addEventListener("dblclick", greenColor);

myBox.addEventListener("mouseover", blueColor);

myBox.addEventListener("mousedown", redColor);

myBox.addEventListener("mouseup", yellowColor);

window.addEventListener("scroll", orangeColor);

$(window).keydown(function (e) {
    if (e.which === 71) {
        greenColor();
        }
    }
);
$(window).keydown(function (e) {
    if (e.which === 82) {
        redColor();
        }
    }
);$(window).keydown(function (e) {
    if (e.which === 66) {
        blueColor();
        }
    }
);$(window).keydown(function (e) {
    if (e.which === 89) {
        yellowColor();
        }
    }
);$(window).keydown(function (e) {
    if (e.which === 79) {
        orangeColor();
        }
    }
);