import template from  './homecenter.html';
import * as HomeCenterController from './homecenter-controller'
console.log(HomeCenterController)

const HomeCenterComponent: ng.IComponentOptions = {
    templateUrl: template,
    controller: HomeCenterController.init
};
export {HomeCenterComponent}