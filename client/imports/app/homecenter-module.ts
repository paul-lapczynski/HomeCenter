
import {HomeCenterComponent}from './homecenter-component';
import * as angular from 'angular';
import template from './homecenter.html'
import './homecenter-controller'

var app = angular.module("homeView", [])
.component("homeView", HomeCenterComponent)

.config(function($routeProvider){
    $routeProvider.when('/',{template:"<home-view></home-view>"})
});
