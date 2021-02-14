import {IPlayer} from "./player.interface";

export class Player implements IPlayer {

  private readonly _name: string;
  private _point: number;

  public constructor(name: string) {
    this._name = name;
    this._point = 0;
  }

  // Getter
  public getName(): string { return this._name; }
  public getPoint(): number { return this._point; }

  // Functions
  wonPoint(): void { this._point += 1; }
}