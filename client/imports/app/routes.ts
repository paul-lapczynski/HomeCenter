import * as angular from 'angular';

var app = angular
.module("homeView")
.config(function($routeProvider){
    $routeProvider
    .when('/',{
        template:"<home-view></home-view>"
    })
});
