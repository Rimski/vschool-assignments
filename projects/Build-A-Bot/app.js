var app = angular.module("mainApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/list", {
        templateUrl: "veiws/list.html",
    })
    .when("/profile", {
        templateUrl: "veiws/profile.html",
    })
    .otherwise({
        templateUrl: "veiws/home.html",
    })
    
});

app.controller("mainController", ["$scope", "$location", "QRService", "RFQService", "roboService", function($scope, $location, QRService, RFQService, roboService) {
    
  $scope.makeRobot = function(input) {
      $scope.robot = {};
      $scope.robot.name = input.name
      roboService.makeRobot(input.info).then(function(data) {
          $scope.robot.img = data;
          QRService.makeQR($scope.robot.img).then(function(data) {
              $scope.robot.qrImg = data;
              console.log($scope.robot);
          })
      });
      RFQService.getQoute(input.name).then(function(data) {
          $scope.robot.quote = data;
      })
      
       $location.path("veiws/list.html");
  }  
    
}])