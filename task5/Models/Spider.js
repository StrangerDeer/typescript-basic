"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spider = void 0;
var Enemy_1 = require("./Enemy");
var Spider = /** @class */ (function (_super) {
    __extends(Spider, _super);
    function Spider() {
        return _super.call(this, Spider.spiderHp, Spider.spiderDmg) || this;
    }
    Spider.spiderHp = 50;
    Spider.spiderDmg = 2;
    return Spider;
}(Enemy_1.Enemy));
exports.Spider = Spider;
