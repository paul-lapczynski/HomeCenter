import {WeatherComponent} from './home-weather-component';
import * as angular from 'angular';
import './home-weather-controller';

var app = angular
.module("homeWeather", [])
.component("homeWeather", WeatherComponent)