System.register(["angular2/core", "angular2/http"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, SimpleComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            SimpleComponent = (function () {
                function SimpleComponent(http) {
                    var _this = this;
                    this.http = http;
                    this.club = "da";
                    this.nickname = true;
                    http.get('http://itpointlab.cafe24.com/mydance/playlist')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.data = data; }, function (err) { return console.log(err); }, function () { return _this.update(); });
                }
                SimpleComponent.prototype.update = function () {
                    this.club = this.data.info.club;
                    console.log('Completed');
                };
                return SimpleComponent;
            }());
            SimpleComponent = __decorate([
                core_1.Component({
                    selector: "simple-component",
                    templateUrl: './templates/simple.component.html',
                }),
                __metadata("design:paramtypes", [http_1.Http])
            ], SimpleComponent);
            exports_1("SimpleComponent", SimpleComponent);
        }
    };
});
//# sourceMappingURL=simple.component.js.map