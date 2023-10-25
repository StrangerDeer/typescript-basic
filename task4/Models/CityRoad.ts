import { Road } from "./Road";

export class CityRoad extends Road {
  private static readonly carCityRoadSpeedLimit = 50;
  private static readonly truckCityRoadSpeedLimit = 50;
  private static readonly busCityRoadSpeedLimit = 50;

  constructor(){
    super(CityRoad.carCityRoadSpeedLimit, CityRoad.truckCityRoadSpeedLimit, CityRoad.busCityRoadSpeedLimit);
  }
}