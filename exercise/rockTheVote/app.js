var app = angular.module("MainApp", []);


app.controller("mainController", ["$scope", "httpService", function($scope, httpService) {
    $scope.agenda = [];
    httpService.getList().then(function(list) {
        $scope.agenda = list;
    });
    $scope.deleteThread = function(item) {
        httpService.deletepost(item).then(function (data) {
           for (var i = 0; i < $scope.agenda; i++) {
                if ($scope.agenda[i].id === data.id) {
                  $scope.agenda.splice(i, 1);
                }
            }
        })
    }
    $scope.addComment = function(item) {
        item.comments.push(item.comment);
        httpService.editpost(item).then(function (data) {
            for (var i = 0; i < $scope.agenda; i++) {
                if ($scope.agenda[i].id === data.id) {
                    $scope.agenda[i] = data;
                }
            }
        })
    }
    $scope.addTopic = function(topic) {
        httpService.addpost(topic).then(function(data) {
            $scope.agenda.push(data);
            $scope.topic = {};
        })
    }
}])