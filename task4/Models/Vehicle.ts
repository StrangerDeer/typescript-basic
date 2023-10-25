export abstract class Vehicle {
  public licencePlate: string = "";

  constructor(licencePlate: string){
    this.licencePlate = licencePlate;
  }
}