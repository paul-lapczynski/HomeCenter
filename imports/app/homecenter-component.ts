import template from  './homecenter.html';
import * as HomeCenterController from './homecenter-controller'

const HomeCenterComponent: ng.IComponentOptions = {
    templateUrl: template,
    controller: HomeCenterController.init
};
export {HomeCenterComponent}