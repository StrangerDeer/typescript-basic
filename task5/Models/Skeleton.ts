import { Enemy } from "./Enemy";

export class Skeleton extends Enemy {
  private static readonly skeletonHp = 50;
  private static readonly skeletonDmg = 2;

  constructor(){
    super(Skeleton.skeletonHp, Skeleton.skeletonDmg)
  }
}