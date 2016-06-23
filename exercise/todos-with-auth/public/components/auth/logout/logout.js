var app = angular.module("TodoApp.Auth");

app.controller("LogoutController", ["UserService", function(UsesrService) {
    UsesrService.logout();
}])