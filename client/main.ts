import * as angular from 'angular';
import * as angularMeteor from 'angular-meteor';
import * as ngMaterial from 'angular-material';
import * as ngAnimate from 'angular-animate';
import * as ngAria from 'angular-aria';
import * as ngRoute from 'angular-route';
import 'angular-material/angular-material.css';
import './imports/app/homecenter-module'

var app = angular.module('homeCenter', [
  angularMeteor,
  ngAnimate,
  ngAria,
  ngMaterial,
  ngRoute,
  "homeView"
]);