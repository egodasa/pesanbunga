var app = angular.module("mandan", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        template : "<b>Homepage</b>"
    })
    .when("/read", {
        templateUrl : "read.html",
        controller : "crud"
    })
    .when("/update", {
        templateUrl : "update.html",
        controller : "crud"
    })
    .when("/delete", {
        templateUrl : "delete.html",
        controller : "crud"
    })
    .when("/create", {
        templateUrl : "create.html",
        controller : "crud"
    })
    .otherwise({
        redirectTo: "/"
    });
});
