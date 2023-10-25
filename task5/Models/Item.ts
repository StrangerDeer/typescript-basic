import { PLayer } from "./Player";

export interface Item {
  effect(player: PLayer): void;
}