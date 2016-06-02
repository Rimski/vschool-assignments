var app = angular.module("mainApp");

app.service("roboService", ["$http", function($http){
    var baseUrl = "https://robohash.p.mashape.com/index.php?text=";
    this.makeRobot = function (input) {
        var config = { headers: {
                "X-Mashape-Key": "ZcjCGOgHlWmshWj3cf5vMxLkrFUbp19E7e0jsnE00fgdNHSOSX"
            },}
        return $http.get(baseUrl + input, config).then(function (response) {
            return response.data.imageUrl
        })
    }
}])