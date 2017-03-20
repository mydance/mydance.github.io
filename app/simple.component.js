System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, SimpleComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            SimpleComponent = (function () {
                function SimpleComponent() {
                    this.name = "da";
                    this.isCalling = true;
                }
                SimpleComponent.prototype.toggleCalling = function () {
                    this.isCalling = !this.isCalling;
                };
                return SimpleComponent;
            }());
            SimpleComponent = __decorate([
                core_1.Component({
                    selector: "simple-component",
                    template: "\n <link rel=\"stylesheet\" type=\"text/css\"\nhref=\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css\">\n\n\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.js\"></script>\n<div class=\"ui container\">\n<h1>Hallo Angular 2!</h1>\n \n \n<div>\n            <label [hidden]=\"!isCalling\">name: {{name}}.</label>\n \n<div>\n                <input [(ngModel)]=\"name\" />\n                <button (click)=\"toggleCalling()\" class=\"ui button\">toggle Calling</button>\n \n<div>\n        </div>\n        \n        </div>\n \n        "
                })
            ], SimpleComponent);
            exports_1("SimpleComponent", SimpleComponent);
        }
    };
});
//# sourceMappingURL=simple.component.js.map