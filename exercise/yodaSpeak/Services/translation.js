var app = angular.module("TranslationApp");
app.service("HttpService", ["$http", function ($http) {
    this.get = function (url, sentance) {
        var configure = {
            headers: {
                "X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
            },
        };
    return $http.get(url + sentance, configure)
            .then(function (response) {
                return response.data;
            })
    }
}]);