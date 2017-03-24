System.register(["angular2/http", "angular2/core", "rxjs/add/operator/map", "rxjs/Rx"], function (exports_1, context_1) {
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
    var http_1, core_1, Rx_1, Song, SimpleComponent;
    return {
        setters: [
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }
        ],
        execute: function () {
            Song = (function () {
                function Song() {
                }
                return Song;
            }());
            SimpleComponent = (function () {
                function SimpleComponent(http) {
                    var _this = this;
                    this.interval = 2000;
                    this.list = [];
                    console.log(http);
                    this.http = http;
                    this.getData();
                    this.now = new Song();
                    Rx_1.Observable
                        .interval(this.interval)
                        .subscribe(function () { return _this.getData(); });
                }
                SimpleComponent.prototype.getData = function () {
                    var _this = this;
                    this.data = this.http.get('https://itpointlab.cafe24.com/mydance/playlist')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.data = data; }, function (err) { return console.log(err); }, function () { return _this.update(); });
                };
                SimpleComponent.prototype.update = function () {
                    this.club = this.data.info.club;
                    this.nickname = this.data.info.nickname;
                    for (var i = 0; i < this.data.list.length; i++) {
                        this.data.list[i].length = this.prettyTime(this.data.list[i].length);
                    }
                    this.now = this.data.list[0];
                    this.list = this.data.list.slice(1, this.data.list.length);
                };
                SimpleComponent.prototype.prettyTime = function (sec) {
                    var date = new Date(null);
                    date.setSeconds(sec); // specify value for SECONDS here
                    return date.toISOString().substr(14, 5);
                };
                return SimpleComponent;
            }());
            SimpleComponent = __decorate([
                core_1.Component({
                    selector: "simple-component",
                    templateUrl: './templates/simple.component.html',
                    providers: [],
                }),
                __metadata("design:paramtypes", [http_1.Http])
            ], SimpleComponent);
            exports_1("SimpleComponent", SimpleComponent);
        }
    };
});
//# sourceMappingURL=simple.component.js.map