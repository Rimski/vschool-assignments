var app = angular.module("TranslationApp", []);
app.controller("translationController", ["$scope", "HttpService", function ($scope, HttpService) {
    var baseUrl = "https://yoda.p.mashape.com/yoda?sentence="
    $scope.sentance = {};
    $scope.translate = function (sentance) {
        $scope.sentance = {};
        HttpService.get(baseUrl, sentance.info).then(function (data) {
            $scope.response = data;
        })
    }
}])