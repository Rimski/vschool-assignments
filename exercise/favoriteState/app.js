var app = angular.module("RoutingApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl: "about/about.html",
            controller: "aboutController",
        })
        .when("/whyILove", {
            templateUrl: "whyILove/why.html",
            controller: "whyController",
        })
        .otherwise({
            templateUrl: "home/home.html",
            controller: "homeController",
        })
});