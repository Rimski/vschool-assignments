var input = document.getElementById("text");
var list = document.getElementById("list");
var add = document.getElementById("button");
var itemArray = [];

function addLi() {
    var newText = document.createTextNode(input.value + " ");

    var btnText = document.createTextNode("DELETE");

    var newItem = document.createElement("li");

    var newButton = document.createElement("button")

    newButton.appendChild(btnText);

    newButton.setAttribute("id", input.value);

    newItem.appendChild(newText);

    newItem.appendChild(newButton);

    newItem.setAttribute("id", input.value + "h");

    list.appendChild(newItem);
}
add.addEventListener("click", function () {
    if (itemArray.indexOf(input.value) === -1) {
        itemArray.push(input.value);
        addLi();
    } else {
        alert("Item allready on list.")
    }
    var deleteThis = document.getElementById(input.value);
    var hide = document.getElementById(input.value + "h");
    deleteThis.addEventListener("click", function () {
        hide.remove();

    })

});



add.disabled = true;

input.addEventListener("input", function () {
    if (input.value.length > 0) {
        add.disabled = false;
    } else add.disabled = true;
});