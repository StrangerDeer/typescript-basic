import { Road } from "./Road";

export class CountryRoad extends Road {
  private static readonly carCityRoadSpeedLimit = 90;
  private static readonly truckCityRoadSpeedLimit = 70;
  private static readonly busCityRoadSpeedLimit = 70;

  constructor(){
    super(CountryRoad.carCityRoadSpeedLimit, CountryRoad.truckCityRoadSpeedLimit, CountryRoad.busCityRoadSpeedLimit);
  }
}