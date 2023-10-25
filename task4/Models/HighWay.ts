import { Road } from "./Road";
import { Vehicle } from "./Vehicle";

export class HighWay extends Road {
  private static readonly carCityRoadSpeedLimit = 120;
  private static readonly truckCityRoadSpeedLimit = 110;
  private static readonly busCityRoadSpeedLimit = 100;

  private licences: string[] = [];

  constructor(){
    super(HighWay.carCityRoadSpeedLimit, HighWay.truckCityRoadSpeedLimit, HighWay.busCityRoadSpeedLimit);
  }
  
  public override makeSpeed(vehicle: Vehicle): string {
    let result = "";

    if(!this.checker(vehicle.licencePlate)){
      result = "Buy ticket!";
      console.log(result);
      return result;
    }

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

  public buyTicket(plate: string): void {
    this.licences.push(plate);
  }

  private checker(plate: string): boolean{
    return this.licences.includes(plate);
  }
}