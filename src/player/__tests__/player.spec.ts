import {Player} from "../../player/player";
import {IPlayer} from "../../player/player.interface";

describe("player win tests", () => {

  let player: IPlayer;

  beforeAll(() => {
    player = new Player('player');
  });

  it("should have name: player", () => {
    expect(player.getName()).toEqual(`player`);
  });

  it("should increment point by one", () => {
    expect(player.getPoint()).toEqual(0);
    player.wonPoint();
    expect(player.getPoint()).toEqual(1);
  });

});
