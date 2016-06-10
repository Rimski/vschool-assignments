var app = angular.module("mainApp");

app.service("QRService", ["$http", function($http){
    var baseUrl = "https://codzz-qr-cods.p.mashape.com/getQrcode?type=url&value=";
    this.makeQR = function (url) {
        var config = { headers: {
                "X-Mashape-Key": "ZcjCGOgHlWmshWj3cf5vMxLkrFUbp19E7e0jsnE00fgdNHSOSX"
            },}
        return $http.get(baseUrl + url, config).then(function (response) {
            return response.data.url
        })
    }
}])