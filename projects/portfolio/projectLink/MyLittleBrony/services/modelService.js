var app = angular.module("MainApp");
var ponys = [];
app.service("ponyHttp", ["$http", function($http) {
   var baseUrl = "http://mean.codingcamp.us/TannerSRWard/pony";
//   var baseUrl = "http://mean.codingcamp.us/jackmcb/pony";
    this.addPony = function(pony) {
    $http.post(baseUrl, pony).then(function(response) {
        ponys.push(response.data);
    })
    }
    this.getPony = function() {
        return $http.get(baseUrl).then(function(response) {
            ponys = response.data;
            return (ponys);
        })
    }
    this.removePony = function(pony) {
        var x = ponys.indexOf(pony);
        $http.delete(baseUrl + "/" + [pony._id]).then(function(response) {
            ponys.splice(x, 1)
        })
    }
}])