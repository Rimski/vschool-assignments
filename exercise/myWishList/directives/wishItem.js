var app = angular.module("mainApp");

app.directive("wishItem", function() {
    return {
        restrict: "E",
        scope: {
        "item": "=",
    },
        templateUrl: "directives/wishitem.html",
    };
    
});