export class PlayersSameNameException  extends Error {
  public constructor(msg = 'Players can not have the same name') {
    super(msg);
  }
}