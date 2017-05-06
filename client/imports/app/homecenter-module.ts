
import {HomeCenterComponent}from './homecenter-component';
import * as angular from 'angular';
import './homecenter-controller';

var app = angular
.module("homeView", [])
.component("homeView", HomeCenterComponent)