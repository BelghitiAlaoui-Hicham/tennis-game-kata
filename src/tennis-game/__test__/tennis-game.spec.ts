import {ITennisGame} from "../tennis-game.interface";
import {TennisGame} from "../tennis-game";
import {Player} from "../../player/player";
import {ExceptionType} from "../../utils/Exception/exception-type.enum";


describe("Score-manager player1 win tests", () => {

  let tenisGame: ITennisGame;
  const player1 = 'player1';
  const player2 = 'player2';

  beforeAll(() => {
    tenisGame = new TennisGame(player1, player2);
  });

  it("should be a string", () => {
    const score = tenisGame.getScore();
    expect(typeof score).toBe('string');
  });

  it("should be a undefined", () => {
    const winner = tenisGame.getWinner();
    expect(typeof winner).toBe('undefined');
  });

  it("should be Player", () => {
    for(let i=0; i<4; i++) {
      tenisGame.wonPoint(player1);
    }

    const winner = tenisGame.getWinner();
    expect(winner).toBeInstanceOf(Player);
    expect((winner as Player).getName()).toBe(player1);
  });


});
describe("Score-manager player2 win tests", () => {

  let tenisGame: ITennisGame;
  const player1 = 'player1';
  const player2 = 'player2';

  beforeAll(() => {
    tenisGame = new TennisGame(player1, player2);
  });


  it("should be Player", () => {
    for(let i=0; i<4; i++) {
      tenisGame.wonPoint(player2);
    }

    const winner = tenisGame.getWinner();
    expect(winner).toBeInstanceOf(Player);
    expect((winner as Player).getName()).toBe(player2);
  });


});
describe("Score-manager Exception tests", () => {

  let tenisGame: ITennisGame;
  const player1 = 'player1';
  const player2 = 'player2';

  beforeAll(() => {
    tenisGame = new TennisGame(player1, player2);
  });


  it("should be an exception player not found", () => {
    expect(()=> {tenisGame.wonPoint('noone')})
      .toThrow(ExceptionType.playerNotFound);
  });

  it("should be an exception players have not the same name", () => {
    const name = 'hicham';
    expect(()=> {new TennisGame(name, name)})
      .toThrow(ExceptionType.playersSameName);
  });

  it("should be an exception game end", () => {
    for(let i = 0; i<4; i++) {
      tenisGame.wonPoint(player1);
    }

    expect(()=> {tenisGame.wonPoint(player1)})
      .toThrow(ExceptionType.gameEnd);
  });
});