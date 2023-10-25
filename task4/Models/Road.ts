import { Vehicle } from "./Vehicle";

export abstract class Road {
  public CarSpeedLimit: number;
  public TruckSpeedLimit: number;
  public BusSpeedLimit: number;

  constructor(carSpeedLimit: number, truckSpeedLimit: number, busSpeedLimit: number){
    this.CarSpeedLimit = carSpeedLimit;
    this.TruckSpeedLimit = truckSpeedLimit;
    this.BusSpeedLimit = busSpeedLimit;
  }

  public makeSpeed(vehicle: Vehicle): string{
    let result = "";
    let vehicleType = vehicle.constructor.name;
    let vehicleSpeedLimit = 0;

    switch(vehicleType){
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

    result = `${vehicleType} accelerates to ${vehicleSpeedLimit}`;

    console.log(result);

    return result;
  }
}