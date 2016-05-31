var app = angular.module("ShowApp");

var showArray = [{
    title:"currage the cowardly dog",
    img:"data:image/png;base64,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",
    description:"a show about a dog"
                }];

app.service("showList", function () {
    this.addShow = function (show) {
        showArray.push(show);
        return showArray;
    }
    this.display = function () {
        return showArray;
    }
})