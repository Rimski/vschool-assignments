var app = angular.module("MainApp", []);

app.controller("mainController", ["$scope", "httpService", function ($scope, httpService) {
    $scope.agenda = [];
    httpService.getList().then(function (list) {
        $scope.agenda = list;
    });
    $scope.deleteThread = function (item) {
        httpService.deletepost(item).then(function (data) {
            for (var i = 0; i < $scope.agenda.length; i++) {
                if ($scope.agenda[i]._id === data._id) {
                    $scope.agenda.splice(i, 1);
                }
            }
        })
    }
    $scope.addComment = function (item) {
        item.comments.push(item.comment);
        httpService.editpost(item).then(function (data) {
            for (var i = 0; i < $scope.agenda.length; i++) {
                if ($scope.agenda[i]._id === data._id) {
                    $scope.agenda[i] = data;
                }
            }
        })
    }
    $scope.addTopic = function (topic) {
        httpService.addpost(topic).then(function (data) {
            $scope.agenda.push(data);
            $scope.topic = {};
        })
    }
    $scope.popularUp = function (item) {
        item.popular = item.popular + 1
        httpService.editpost(item).then(function (data) {})
    }
    $scope.popularDown = function (item) {
        item.popular = item.popular - 1
        httpService.editpost(item).then(function (data) {})
    }
}])