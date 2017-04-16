import * as angular from 'angular';
import * as angularMeteor from 'angular-meteor';
import * as ngMaterial from 'angular-material';
import * as ngAnimate from 'angular-animate';
import * as ngAria from 'angular-aria';
import 'angular-material/angular-material.css'

var app = angular.module('test', [
  angularMeteor,
  ngAnimate,
  ngAria,
  ngMaterial
]);

app.component('testComponent', {
  template: '<div><md-card><md-button class="md-primary">test</md-button>TEST COMPONENT</md-card></div>'
});

interface TestController extends ng.IComponentController{};
class TestController {
  data: number;
  constructor(){
  }
}
var options: ng.IComponentOptions = {
  template: "<div>GG UNINSTALL {{$ctrl.testTest}}YEEEEE</div>",
  bindings: {
    data: '<'
  },
  controller: [() => {return new TestController()}]
}
app.component("test", options);