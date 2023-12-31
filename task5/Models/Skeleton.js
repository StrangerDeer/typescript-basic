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
exports.Skeleton = void 0;
var Enemy_1 = require("./Enemy");
var Skeleton = /** @class */ (function (_super) {
    __extends(Skeleton, _super);
    function Skeleton() {
        return _super.call(this, Skeleton.skeletonHp, Skeleton.skeletonDmg) || this;
    }
    Skeleton.skeletonHp = 50;
    Skeleton.skeletonDmg = 2;
    return Skeleton;
}(Enemy_1.Enemy));
exports.Skeleton = Skeleton;
