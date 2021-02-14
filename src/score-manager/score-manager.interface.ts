import {IPlayer} from "../player/player.interface";

export interface IScoreManager {
  score(player1: IPlayer, player2: IPlayer): string;
  playerWinner(player1: IPlayer, player2: IPlayer): IPlayer | undefined;
}
