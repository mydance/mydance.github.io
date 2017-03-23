System.register(["angular2/http", "angular2/platform/browser", "./simple.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, browser_1, simple_component_1;
    return {
        setters: [
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (simple_component_1_1) {
                simple_component_1 = simple_component_1_1;
            }
        ],
        execute: function () {
            browser_1.bootstrap(simple_component_1.SimpleComponent, [http_1.HTTP_PROVIDERS]);
        }
    };
});
//# sourceMappingURL=boot.js.map