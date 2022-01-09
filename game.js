kaboom();
loadSprite("alien", "/sprites/alien.png");
loadSprite("ground", "/sprites/ground.png");
loadSprite("enemy", "/sprites/enemy.png");

const player = add([
sprite("alien"),
scale(2.5),
pos(20,20),
area(),
body()
]);

const MOVE_SPEED = 200;

keyDown("right", () => {
player.move(MOVE_SPEED, 0)
});

keyDown("left", () => {
player.move(-MOVE_SPEED, 0)
});

addLevel([
  "     ",
  "  @  ",
  "     ",
  "xxxxx",
], {
    width: 80,
    height: 80,
 "x" : () => [
        sprite("ground"),  area(), solid()],
"@" : () => [
        sprite("enemy"), scale(3.5), area(), body(), "dangerous"]
});

player.collides("dangerous", () => {
  destroy(player)
})