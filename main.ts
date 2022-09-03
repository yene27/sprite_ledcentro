let sprite = game.createSprite(2, 2)
game.setScore(0)
game.setLife(2)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        basic.pause(200)
        if (sprite.get(LedSpriteProperty.X) == 2) {
            basic.showIcon(IconNames.Happy)
            game.setScore(game.score() + 1)
        } else {
            game.removeLife(1)
        }
    }
    sprite.move(1)
    sprite.ifOnEdgeBounce()
})
