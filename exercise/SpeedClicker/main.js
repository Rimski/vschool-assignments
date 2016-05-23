var clicks = 0;



if (sessionStorage.getItem("autosave")) {
    clicks.value = sessionStorage.getItem(clicks);
}

window.addEventListener("click", function () {
    clicks++;

    var mySpan = document.getElementsByTagName("span");

    mySpan.innerHTML = clicks.value;

    sessionStorage.setItem(clicks, clicks.value);
});