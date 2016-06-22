//grabing the ellements by id 
var imgOne = document.getElementById("img1");
var imgTwo = document.getElementById("img2");
var imgThree = document.getElementById("img3");
var displayText = document.getElementById("displayText");
var displayImg = document.getElementById("displayImg");


//add eventlisteners to events 
//this can be done in the html; but i prefer it in the javaScript
// event listeners for first img
imgOne.addEventListener("mouseover", function () {
    displayImg.src = imgOne.src;
    displayText.innerHTML = imgOne.alt;
});
// to replace 
imgOne.addEventListener("mouseout", function () {
    displayImg.src = "";
    displayText.innerHTML = "Hover over an image below to display here.";
});

// event listeners for second img
// adds the stuff
imgTwo.addEventListener("mouseover", function () {
    displayImg.src = imgTwo.src;
    displayText.innerHTML = imgTwo.alt;
});
// reverts stuff
imgTwo.addEventListener("mouseout", function () {
    displayImg.src = "";
    displayText.innerHTML = "Hover over an image below to display here.";
});

// event listener for third img
imgThree.addEventListener("mouseover", function () {
    displayImg.src = imgThree.src;
    displayText.innerHTML = imgThree.alt;
});
imgThree.addEventListener("mouseout", function () {
    displayImg.src = "";
    displayText.innerHTML = "Hover over an image below to display here.";
});