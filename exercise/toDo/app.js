var app = angular.module("mainApp", []);
app.controller("mainController", ["$scope", "HttpService", function ($scope, HttpService) {
    $scope.addToDo = true;
    var baseUrl = "http://mean.codingcamp.us/TannerSRWard/todo/";
    $scope.items = [];
    HttpService.get(baseUrl).then(
        function (data) {
            $scope.items = data;
        });
    $scope.submit = function (item) {
        HttpService.post(baseUrl, item)
            .then(function (data) {

                $scope.items.push(data);
                $scope.item = {};
            });
    };
    $scope.deleteOne = function(item) {
        
    }
    $scope.edit = function(item) {
            HttpService.Put(baseUrl, item)
                .then(function (){
                item.edit = !item.edit;
            })
    };
}]);