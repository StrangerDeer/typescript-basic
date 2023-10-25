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
exports.HighWay = void 0;
var Road_1 = require("./Road");
var HighWay = /** @class */ (function (_super) {
    __extends(HighWay, _super);
    function HighWay() {
        var _this = _super.call(this, HighWay.carCityRoadSpeedLimit, HighWay.truckCityRoadSpeedLimit, HighWay.busCityRoadSpeedLimit) || this;
        _this.licences = [];
        return _this;
    }
    HighWay.prototype.makeSpeed = function (vehicle) {
        var result = "";
        if (!this.checker(vehicle.licencePlate)) {
            result = "Buy ticket!";
            console.log(result);
            return result;
        }
        var vehicleType = vehicle.constructor.name;
        var vehicleSpeedLimit = 0;
        switch (vehicleType) {
            case "Car":
                vehicleSpeedLimit = this.CarSpeedLimit;
                break;
            case "Truck":
                vehicleSpeedLimit = this.TruckSpeedLimit;
                break;
            case "Bus":
                vehicleSpeedLimit = this.BusSpeedLimit;
                break;
            default: vehicleSpeedLimit = 0;
        }
        result = "".concat(vehicleType, " accelerates to ").concat(vehicleSpeedLimit);
        console.log(result);
        return result;
    };
    HighWay.prototype.buyTicket = function (plate) {
        this.licences.push(plate);
    };
    HighWay.prototype.checker = function (plate) {
        return this.licences.includes(plate);
    };
    HighWay.carCityRoadSpeedLimit = 120;
    HighWay.truckCityRoadSpeedLimit = 110;
    HighWay.busCityRoadSpeedLimit = 100;
    return HighWay;
}(Road_1.Road));
exports.HighWay = HighWay;
