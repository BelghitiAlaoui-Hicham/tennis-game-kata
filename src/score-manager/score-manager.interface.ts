import {IPlayer} from "../player/player.interface";

export interface IScoreManager {
  /**
   * returns the Calculated the score in the game.
   *
   * @param player1 - The first player {@link IPlayer}
   * @param player2 - The second player {@link IPlayer}
   * @returns string
   *
   */
  score(player1: IPlayer, player2: IPlayer): string;

  /**
   * returns the winner of the game.
   *
   * @param player1 - The first player {@link IPlayer}
   * @param player2 - The second player {@link IPlayer}
   * @returns {@link IPlayer} if there is a winner.
   * @returns undefined if there is no winner.
   *
   */
  playerWinner(player1: IPlayer, player2: IPlayer): IPlayer | undefined;
}
