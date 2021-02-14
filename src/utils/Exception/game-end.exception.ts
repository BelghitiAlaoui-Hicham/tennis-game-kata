import {ExceptionType} from "./exception-type.enum";

export class GameEndException  extends Error {
  public constructor() {
    const msg: string = ExceptionType.gameEnd;
    super(msg);
  }
}