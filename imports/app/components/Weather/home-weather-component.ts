import template from  './home-weather.html';
import * as WeatherController from './home-weather-controller'

const WeatherComponent: ng.IComponentOptions = {
    templateUrl: template,
    controller: WeatherController.init
};
export {WeatherComponent}