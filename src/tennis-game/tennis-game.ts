import {IPlayer} from "../player/player.interface";
import {ITennisGame} from "./tennis-game.interface";
import {Player} from "../player/player";
import {ScoreManager} from "../score-manager/score-manager";
import {PlayerNotfoundException} from "../utils/Exception/player-notfound.exception";
import {PlayersSameNameException} from "../utils/Exception/players-same-name.exception";
import {GameEndException} from "../utils/Exception/game-end.exception";

export class TennisGame implements ITennisGame {
  private _player1: IPlayer;
  private _player2: IPlayer;
  private _scoreManager: ScoreManager;

  private isGameEnd: boolean;


  public constructor(namePlayer1: string, namePlayer2: string) {
    this.isGameEnd = false;

    if(namePlayer1 === namePlayer2) {
      throw new PlayersSameNameException();
    }
    this._player1 = new Player(namePlayer1);
    this._player2 = new Player(namePlayer2);
    this._scoreManager = ScoreManager.getInstance();
  }

  private findPlayerByName(playerName: string): IPlayer | undefined {
    if(this._player1.getName() === playerName) {
      return this._player1;
    }
    if(this._player2.getName() === playerName) {
      return this._player2;
    }
    return undefined;
  }

  private setEndGame(): void {
    const player : IPlayer | undefined = this._scoreManager.playerWinner(this._player1, this._player2);
    if(player) {
      this.isGameEnd = true;
    }
  }

    wonPoint(playerName: string): void {

      if(this.isGameEnd) { throw new GameEndException(); }
      const player = this.findPlayerByName(playerName);
      if(player) {
        player.wonPoint();
        this.setEndGame();
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