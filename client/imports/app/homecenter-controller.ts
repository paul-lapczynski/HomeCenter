class HomeCenterController implements ng.IController{
    constructor(private $http: ng.IHttpService) {

    }
    Dance(): string {
        return "ASDASDASD";
    }
    
    test(): void {
        this.$http.get("www.google.com").then((data:any) => {
            console.log(data);
        });
    }
}

export var init = ["$http", ($http: ng.IHttpService) => {return new HomeCenterController($http)}]