var app = angular.module("mainApp");

app.service("RFQService", ["$http", function($http){
    var baseUrl = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=";
    this.getQoute = function (input) {
        var config = { headers: {
                "X-Mashape-Key": "ZcjCGOgHlWmshWj3cf5vMxLkrFUbp19E7e0jsnE00fgdNHSOSX"
            },}
        return $http.get(baseUrl, config).then(function (response) {
            return response.data
        })
    }
}])