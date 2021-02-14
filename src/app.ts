import {TennisGame} from "./tennis-game/tennis-game";
import * as scenario from './scenario.json';

const {playerName1, playerName2, wins} = scenario;
const tennisGame = new TennisGame(playerName1, playerName2);

console.log(tennisGame.getScore());
let c = 0;
try{
  do {
    tennisGame.wonPoint(wins[c]);
    console.log(tennisGame.getScore());
    c+=1;
  }while(wins.length > c && tennisGame.getWinner() === undefined);
} catch (e) {
  console.error(e.message);
}

