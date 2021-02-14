import {IPlayer} from "../player/player.interface";

export interface ITennisGame {

  wonPoint(playerName:string): void;
  getScore(): string;
  getWinner(): IPlayer | undefined;

}