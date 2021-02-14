export interface IPlayer {

  getName(): string;
  getPoint(): number;

  /**
   * Increment point of the player.
   *
   * @returns void
   *
   */
  wonPoint(): void;

}