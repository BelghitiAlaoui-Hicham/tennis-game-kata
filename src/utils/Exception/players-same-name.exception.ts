import {ExceptionType} from "./exception-type.enum";

export class PlayersSameNameException  extends Error {
  public constructor() {
    const msg: string = ExceptionType.playersSameName;
    super(msg);
  }
}