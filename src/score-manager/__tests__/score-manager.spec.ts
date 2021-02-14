import {ScoreManager} from "../score-manager";
import {Player} from "../../player/player";
import {IPlayer} from "../../player/player.interface";

describe("Score-manager player2 win tests", () => {

  let player1: IPlayer;
  let player2: IPlayer;
  const scoreManager = ScoreManager.getInstance();

  beforeAll(() => {
    player1 = new Player('player1');
    player2 = new Player('player2');
  });

  it("should be love - love", () => {
    const score = scoreManager.score(player1, player2);
    expect(score).toEqual(`Love ALL`);
  });

  it("should be love - Thirty", () => {
    for(let i = 0; i < 2; i++) {
      player2.wonPoint();
    }
    const score = scoreManager.score(player1, player2);
    expect(score).toEqual(`Love - Thirty`);
  });

  it("should be Thirty ALL", () => {
    for(let i = 0; i < 2; i++) {
      player1.wonPoint();
    }
    const score = scoreManager.score(player1, player2);
    expect(score).toEqual(`Thirty ALL`);
  });


  it("should be Game in deuce", () => {

    player1.wonPoint();
    player2.wonPoint();

    const score = scoreManager.score(player1, player2);
    expect(score).toEqual(`Game in deuce`);
  });

  it("should be Advantage player1", () => {
    player1.wonPoint();
    const score = scoreManager.score(player1, player2);
    expect(score).toEqual(`Advantage player1`);
  });

  it("should be Game in deuce", () => {
    player2.wonPoint();
    const score = scoreManager.score(player1, player2);
    expect(score).toEqual(`Game in deuce`);
  });

  it("should be Advantage player2", () => {
    player2.wonPoint();
    const score = scoreManager.score(player1, player2);
    expect(score).toEqual(`Advantage player2`);
  });

  it("should have no winner", () => {
    const winnerPlayer = scoreManager.playerWinner(player1, player2);
    expect(winnerPlayer).toEqual(undefined);
  });

  it("should player2 win the game", () => {
    player2.wonPoint();
    const winnerPlayer = scoreManager.playerWinner(player1, player2);
    const score = scoreManager.score(player1, player2);

    expect(winnerPlayer).toEqual(player2);
    expect((winnerPlayer as Player).getName()).toEqual(player2.getName());
    expect(score).toEqual(`${player2.getName()} win the game.`);
  });

});

describe("Score-manager player1 win tests", () => {

  let player1: IPlayer;
  let player2: IPlayer;
  const scoreManager = ScoreManager.getInstance();

  beforeAll(() => {
    player1 = new Player('player1');
    player2 = new Player('player2');
  });

  it("should player1 win the game", () => {
    for(let i = 0; i< 4; i++) {
      player1.wonPoint();
    }

    const winnerPlayer = scoreManager.playerWinner(player1, player2);
    const score = scoreManager.score(player1, player2);

    expect(winnerPlayer).toEqual(player1);
    expect((winnerPlayer as Player).getName()).toEqual(player1.getName());
    expect(score).toEqual(`${player1.getName()} win the game.`);
  });

});