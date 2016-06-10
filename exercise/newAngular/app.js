var app = angular.module("MainApp", []);

app.controller("mainController", ["$scope", function($scope) {
    $scope.person = {
        firstName: "jimmy",
        lastName: "johns",
        phone: "35443325234",
        imgUrl: "dsaafda"
    }
}])

app.directive("contactCard", function() {
    return {
        templateUrl: "./views/contact-card.html",
        scope: {
            person: "="
        }
        
    }
})