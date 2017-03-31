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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var Song = (function () {
    function Song() {
    }
    return Song;
}());
var UserComponent = (function () {
    function UserComponent(http) {
        var _this = this;
        this.interval = 2000;
        this.list = [];
        this.http = http;
        this.getData();
        this.now = new Song();
        Rx_1.Observable
            .interval(this.interval)
            .subscribe(function () { return _this.getData(); });
    }
    UserComponent.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get('https://itpointlab.cafe24.com/mydance/playlist')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.data = data; }, function (err) { return console.log(err); }, function () { return _this.update(); });
    };
    UserComponent.prototype.update = function () {
        this.club = this.data.info.club;
        this.nickname = this.data.info.nickname;
        for (var i = 0; i < this.data.list.length; i++) {
            this.data.list[i].length = this.prettyTime(this.data.list[i].length);
        }
        this.now = this.data.list[0];
        this.list = this.data.list.slice(1, this.data.list.length);
    };
    UserComponent.prototype.prettyTime = function (sec) {
        var date = new Date(null);
        date.setSeconds(sec); // specify value for SECONDS here
        return date.toISOString().substr(14, 5);
    };
    return UserComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UserComponent.prototype, "propertyName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UserComponent.prototype, "entity", void 0);
UserComponent = __decorate([
    core_1.Component({
        selector: 'user-component',
        template: "<h1>User Component</h1>",
        providers: [],
    }),
    __metadata("design:paramtypes", [http_1.Http])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map