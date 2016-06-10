var app = angular.module("MainApp", []);

app.filter("temp", function () {
    return function (input, type) {
        if (isNaN(input)) {
            return input + "°";
        } else if (type === "c") {
            return input - 273 + "°C";
        } else if (type === "f") {
            return 1.8 * (input - 273) + 32 + "°F";
        }

    }
})

app.controller("mainController", ["$scope", "httpService", function ($scope, httpService) {
    $scope.tempature = 290;
    $scope.agenda = [];
    httpService.getList().then(function (list) {
        $scope.agenda = list;
    });
    $scope.deleteThread = function (item) {
        httpService.deletepost(item).then(function (data) {
            for (var i = 0; i < $scope.agenda; i++) {
                if ($scope.agenda[i].id === data.id) {
                    $scope.agenda.splice(i, 1);
                }
            }
        })
    }
    $scope.addComment = function (item) {
        item.comments.push(item.comment);
        httpService.editpost(item).then(function (data) {
            for (var i = 0; i < $scope.agenda; i++) {
                if ($scope.agenda[i].id === data.id) {
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
}])