import {TennisGame} from "./tennis-game/tennis-game";

const playerName1 = 'Michel';
const playerName2 = 'Hicham';

const tennisGame = new TennisGame(playerName1, playerName2);
tennisGame.wonPoint(playerName1);
tennisGame.wonPoint(playerName2);
tennisGame.wonPoint(playerName2);
tennisGame.wonPoint(playerName1);
tennisGame.wonPoint(playerName2);
tennisGame.wonPoint(playerName1);
tennisGame.wonPoint(playerName1);
tennisGame.wonPoint(playerName2);
tennisGame.wonPoint(playerName2);
tennisGame.wonPoint(playerName2);

console.log(tennisGame.getScore());