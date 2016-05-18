var input = $("#text");
var list = document.getElementById("list");
var add = document.getElementById("button");


add.addEventListener("click", function () {
    console.log("you rang");
    $("#list").append("<li>" + input.value + "</li>");
});