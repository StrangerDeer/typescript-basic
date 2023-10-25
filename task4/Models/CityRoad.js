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
exports.CityRoad = void 0;
var Road_1 = require("./Road");
var CityRoad = /** @class */ (function (_super) {
    __extends(CityRoad, _super);
    function CityRoad() {
        return _super.call(this, CityRoad.carCityRoadSpeedLimit, CityRoad.truckCityRoadSpeedLimit, CityRoad.busCityRoadSpeedLimit) || this;
    }
    CityRoad.carCityRoadSpeedLimit = 50;
    CityRoad.truckCityRoadSpeedLimit = 50;
    CityRoad.busCityRoadSpeedLimit = 50;
    return CityRoad;
}(Road_1.Road));
exports.CityRoad = CityRoad;
