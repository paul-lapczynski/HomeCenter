# 1. Clone HomeCenter

```
git clone https://github.com/paul-lapczynski/HomeCenter.git
```

# 2. Install NPM Packages
```
cd HomeCenter/
npm install
```

# About
HomeCenter is using MeteorJS along with AngularJS as it's templating engine. Here are a few things it is using
- AngularJS
- Angular Material
- Typescript

# General -  Meteor | AngularJS 1.5+ with Typescript
Components! Here is some general information about using a component architecture along Meteor's framework.

Basic folder structure
```
client/
    -- main.ts
    -- main.html
imports/
    app/
    -- app-component.ts
    -- app-controller.ts
    -- app.html
    -- app-module.ts
```
The real trick here is how to set up the component and templates for AngularJS 1.5. 
- # Step 1
    Modules
    ```ts
    import {HomeCenterComponent} from './homecenter-component';

    import * as angular from 'angular';
    import './homecenter-controller';

    var app = angular
    .module("homeView", ["homeWeather"])
    .component("homeView", HomeCenterComponent)
    ```
    Notice how we are importing the component. If we are importing we need some exporting from that component file. Typescript can be a little tricky with Meteor. Since a component is just an object, we can declare it as a const and export it using the {} notation.
- # Step 2 
    Components
    ```ts
    import template from  './homecenter.html';
    import * as HomeCenterController from './homecenter-controller'

    const HomeCenterComponent: ng.IComponentOptions = {
        templateUrl: template,
        controller: HomeCenterController.init
    };
    export {HomeCenterComponent}
    ```
    Important things to note
    - We are importing the *template* and setting the templateUrl to that import. Setting the url like Meteor usually does it didn't seem to work with this stack. 
    - The controller.init??? What???? Typescript can be a blessing and a curse. But once you have the setup it's a beautiful thing.

- # Step 3
    Controllers

    ```ts
    class HomeCenterController implements ng.IController{
        constructor(private $http: ng.IHttpService) {

        }
    }

    export var init = ["$http", ($http: ng.IHttpService) => {return new HomeCenterController($http)}]
    ```
    An angular controller can take a Function, or an Array. We are exporting an array that includes the injected services. We are exporting a the variable init, for syntactical simplicity. On the importing side, in Step 2, we see we are doing *import * as HomeCenterController*. To access the actually controller, .init will be the correct value.
