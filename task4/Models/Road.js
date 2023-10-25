"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Road = void 0;
var Road = /** @class */ (function () {
    function Road(carSpeedLimit, truckSpeedLimit, busSpeedLimit) {
        this.CarSpeedLimit = carSpeedLimit;
        this.TruckSpeedLimit = truckSpeedLimit;
        this.BusSpeedLimit = busSpeedLimit;
    }
    Road.prototype.makeSpeed = function (vehicle) {
        var result = "";
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
    return Road;
}());
exports.Road = Road;
