import {ExceptionType} from "./exception-type.enum";

export class PlayerNotfoundException  extends Error {
  public constructor() {
    const msg: string = ExceptionType.playerNotFound;
    super(msg);
  }
}