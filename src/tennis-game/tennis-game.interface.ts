import {IPlayer} from "../player/player.interface";

export interface ITennisGame {

  /**
   * Increment point of the player by his name.
   *
   * @param playerName - The name input string
   * @throws player not found, if there is no player with the playerName
   * @returns void
   *
   */
  wonPoint(playerName:string): void;

  /**
   * returns the Calculated score in the game.
   *
   * @returns string
   *
   */
  getScore(): string;

  /**
   * returns the winner of the game.
   *
   * @returns {@link IPlayer} if there is a winner.
   * @returns undefined if there is no winner.
   *
   */
  getWinner(): IPlayer | undefined;

}