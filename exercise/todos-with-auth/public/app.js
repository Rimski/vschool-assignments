var app = angular.module("TodoApp", ["ngRoute", "TodoApp.Auth"]);

app.config(function($routeprovider) {
    $routeprovider
        .when("/", {
        templateUrl: "components/home/home.html"
    })
    .when("/todos", {
        templateUrl: "components/todos/todos.html",
        controller: "todoController"
    })
    .when("/signup", {
        templateUrl: "components/signup/signup.html",
        controller: "SignupuController"
    })
});



