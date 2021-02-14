export class PlayerNotfoundException  extends Error {
  public constructor(msg = 'Player name not found in the game') {
    super(msg);
  }
}