import {IScoreManager} from "./score-manager.interface";
import {IPlayer} from "../player/player.interface";

export class ScoreManager implements IScoreManager {
  private static instance: ScoreManager;
  private readonly scores = ['Love', 'Fifteen', 'Thirty', 'Forty'];

  private constructor() { }

  public static getInstance(): ScoreManager {
    if (!ScoreManager.instance) {
      ScoreManager.instance = new ScoreManager();
    }
    return ScoreManager.instance;
  }

  public score(player1: IPlayer, player2: IPlayer): string {

    if(this.isAll(player1, player2)) {
      return `${this.scores[player1.getScore()]} ALL`;
    }

    if(this.isDeuce(player1, player2)) { return `Game in deuce`; }
    const playerAdvantage = this.playerWithAdvantage(player1, player2);
    if(playerAdvantage) { return `Advantage ${playerAdvantage.getName()}`; }

    const winner = this.playerWinner(player1, player2);
    if(winner) { return `${winner.getName()} win the game.`; }

    return `${this.scores[player1.getScore()]} - ${this.scores[player2.getScore()]}`
  }

  public playerWinner(player1: IPlayer, player2: IPlayer): IPlayer | undefined {
    if(this.isWinner(player1, player2)) { return player1; }
    if(this.isWinner(player2, player1)) { return player2; }
    return undefined;
  }

  private playerWithAdvantage(player1: IPlayer, player2: IPlayer): IPlayer | undefined {
    if(this.isAdvantage(player1, player2)) { return player1; }
    if(this.isAdvantage(player2, player1)) { return player2; }
    return undefined;
  }

  private isDeuce(player1: IPlayer, player2: IPlayer): boolean {
    return this.isEqual(player1, player2) && player1.getScore() >= 3;
  }

  private isEqual(player1: IPlayer, player2: IPlayer): boolean {
    return player1.getScore() === player2.getScore();
  }

  private isAll(player1: IPlayer, player2: IPlayer) {
    return this.isEqual(player1, player2) && player1.getScore() <= 2;
  }

  private isWinner(winnerPlayer: IPlayer, adversary: IPlayer): boolean {
    return winnerPlayer.getScore() >= 4
      && winnerPlayer.getScore() - adversary.getScore() >= 2;
  }

  private isAdvantage(advantagePlayer: IPlayer, adversary: IPlayer): boolean {
    return advantagePlayer.getScore() >= 4
      && advantagePlayer.getScore() - adversary.getScore() === 1;
  }

}