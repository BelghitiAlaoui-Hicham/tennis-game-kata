import {IPlayer} from "../player/player.interface";
import {ITennisGame} from "./tennis-game.interface";
import {Player} from "../player/player";
import {ScoreManager} from "../score-manager/score-manager";
import {PlayerNotfoundException} from "../utils/Exception/player-notfound.exception";
import {PlayersSameNameException} from "../utils/Exception/players-same-name.exception";

export class TennisGame implements ITennisGame {
  private _player1: IPlayer;
  private _player2: IPlayer;
  private _scoreManager: ScoreManager;

  public constructor(namePlayer1: string, namePlayer2: string) {
    if(namePlayer1 === namePlayer2) {
      throw new PlayersSameNameException();
    }
    this._player1 = new Player(namePlayer1);
    this._player2 = new Player(namePlayer2);
    this._scoreManager = ScoreManager.getInstance();
  }

    wonPoint(playerName: string): void {
      if(this._player1.getName() === playerName) {
        this._player1.wonPoint();
        return;
      }
      if(this._player2.getName() === playerName) {
        this._player2.wonPoint();
        return;
      }
      throw new PlayerNotfoundException();
    }

    getScore(): string {
      return this._scoreManager.score(this._player1, this._player2);
    }

    getWinner(): IPlayer | undefined  {
       return this._scoreManager.playerWinner(this._player1, this._player2);
    }
}