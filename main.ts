namespace SpriteKind {
    export const enragedEnemy = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    P1.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - Lastpressed >= timebetweenpress) {
        if (P1.image.equals(img`
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f f . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 2 2 2 e . . . . 
            . . . f f e e f 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `)) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . b b . . . . . . . 
                . . . . . . b d d b . . . . . . 
                . . . . . b d 5 5 d b . . . . . 
                . . . . b b 5 5 5 5 b b . . . . 
                . . . . b 5 5 5 5 5 5 b . . . . 
                b b b b b 5 5 5 5 1 1 d b b b b 
                b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
                b d d 5 5 5 5 5 5 1 1 1 5 d d b 
                . b d d 5 5 5 5 5 5 5 5 d d b . 
                . . b b 5 5 5 5 5 5 5 5 b b . . 
                . . c b 5 5 5 5 5 5 5 5 b c . . 
                . . c 5 5 5 5 d d 5 5 5 5 c . . 
                . . c 5 5 d b b b b d 5 5 c . . 
                . . c 5 d b c c c c b d 5 c . . 
                . . c c c c . . . . c c c c . . 
                . . . . . . . . . . . . . . . . 
                `, P1, -100, 0)
        } else if (P1.image.equals(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `)) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . b b . . . . . . . 
                . . . . . . b d d b . . . . . . 
                . . . . . b d 5 5 d b . . . . . 
                . . . . b b 5 5 5 5 b b . . . . 
                . . . . b 5 5 5 5 5 5 b . . . . 
                b b b b b 5 5 5 5 1 1 d b b b b 
                b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
                b d d 5 5 5 5 5 5 1 1 1 5 d d b 
                . b d d 5 5 5 5 5 5 5 5 d d b . 
                . . b b 5 5 5 5 5 5 5 5 b b . . 
                . . c b 5 5 5 5 5 5 5 5 b c . . 
                . . c 5 5 5 5 d d 5 5 5 5 c . . 
                . . c 5 5 d b b b b d 5 5 c . . 
                . . c 5 d b c c c c b d 5 c . . 
                . . c c c c . . . . c c c c . . 
                . . . . . . . . . . . . . . . . 
                `, P1, 100, 0)
        } else if (P1.image.equals(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . b b . . . . . . . 
                . . . . . . b d d b . . . . . . 
                . . . . . b d 5 5 d b . . . . . 
                . . . . b b 5 5 5 5 b b . . . . 
                . . . . b 5 5 5 5 5 5 b . . . . 
                b b b b b 5 5 5 5 1 1 d b b b b 
                b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
                b d d 5 5 5 5 5 5 1 1 1 5 d d b 
                . b d d 5 5 5 5 5 5 5 5 d d b . 
                . . b b 5 5 5 5 5 5 5 5 b b . . 
                . . c b 5 5 5 5 5 5 5 5 b c . . 
                . . c 5 5 5 5 d d 5 5 5 5 c . . 
                . . c 5 5 d b b b b d 5 5 c . . 
                . . c 5 d b c c c c b d 5 c . . 
                . . c c c c . . . . c c c c . . 
                . . . . . . . . . . . . . . . . 
                `, P1, 0, -100)
        } else if (P1.image.equals(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . b b . . . . . . . 
                . . . . . . b d d b . . . . . . 
                . . . . . b d 5 5 d b . . . . . 
                . . . . b b 5 5 5 5 b b . . . . 
                . . . . b 5 5 5 5 5 5 b . . . . 
                b b b b b 5 5 5 5 1 1 d b b b b 
                b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
                b d d 5 5 5 5 5 5 1 1 1 5 d d b 
                . b d d 5 5 5 5 5 5 5 5 d d b . 
                . . b b 5 5 5 5 5 5 5 5 b b . . 
                . . c b 5 5 5 5 5 5 5 5 b c . . 
                . . c 5 5 5 5 d d 5 5 5 5 c . . 
                . . c 5 5 d b b b b d 5 5 c . . 
                . . c 5 d b c c c c b d 5 c . . 
                . . c c c c . . . . c c c c . . 
                . . . . . . . . . . . . . . . . 
                `, P1, 0, 100)
        }
        Lastpressed = game.runtime()
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    P2.setImage(img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d 4 e f e 
        f f f e 4 4 4 4 d d 4 e 
        e 4 f b 1 1 1 e d d e . 
        . . f 6 6 6 6 f e e . . 
        . . f f f f f f f . . . 
        . . f f f . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    P1.setImage(img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    P2.setImage(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f e e e e e e f e f 
        f f f f e e e e f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 f b b b b b b f 4 e 
        4 d f d d d d d d c d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    P1.setImage(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    P2.setImage(img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        f f 4 d 4 d d d d f . . 
        . f f f 4 d d b b f . . 
        . 4 d d e 4 4 4 e f . . 
        . e d d e 1 1 1 1 f . . 
        . f e e f 6 6 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    P1.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    P2.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
let EnemySprite: Sprite = null
let SpawnLocation: tiles.Location[] = []
let projectile: Sprite = null
let P2: Sprite = null
let P1: Sprite = null
let timebetweenpress = 0
let Lastpressed = 0
Lastpressed = 0
timebetweenpress = 500
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`level2`)
P1 = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . . f 2 f e e e e f f . . . 
    . . . f 2 2 2 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 2 2 2 2 e e f f f f . . 
    . . f 2 e f f f f 2 2 2 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . f f e d d f 1 4 d 4 e e f . 
    . f d d f d d d d 4 e e e f . . 
    . f b b f e e e 4 e e f f . . . 
    . f b b e d d 4 2 2 2 f . . . . 
    . . f b e d d e 2 2 2 e . . . . 
    . . . f f e e f 4 4 4 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(P1, 100, 100)
P2 = sprites.create(img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e e f . . 
    f f f e e e e e e e f . 
    f f f f e e e e e e e f 
    f f f f f e e e 4 e e f 
    f f f f e e e 4 4 e e f 
    f f f f 4 4 4 4 4 e f f 
    f f 4 e 4 f f 4 4 e f . 
    f f 4 d 4 d d d d f . . 
    . f f f 4 d d b b f . . 
    . 4 d d e 4 4 4 e f . . 
    . e d d e 1 1 1 1 f . . 
    . f e e f 6 6 6 6 f f . 
    . f f f f f f f f f f . 
    . . f f . . . f f f . . 
    `, SpriteKind.Player)
controller.player2.moveSprite(P2, 100, 100)
tiles.placeOnTile(P1, tiles.getTileLocation(0, 0))
tiles.placeOnTile(P2, tiles.getTileLocation(0, 0))
let EnemyImages = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c c . . . 
    . . . . . . c 5 5 5 5 5 c c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c b b b b 1 b b c c . . 
    . . . . c 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 b b c c 
    . . c c d 1 1 1 b 1 b 1 5 5 5 c 
    . . c c d 1 c 1 1 1 b 1 b b 5 c 
    . c c d d 1 1 1 1 1 b 1 f b 5 c 
    f d d d 1 1 1 1 1 b b b f . c c 
    f f f f f 1 1 1 b b 5 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `]
splitScreen.setSplitScreenEnabled(true)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, P1)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, P2)
splitScreen.setBorderColor(15)
let enemyList: Sprite[] = []
let wave = 0
game.onUpdate(function () {
    // Makes enemy follow player after player enters its 75 pixel radius
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.x > P1.x - 75 && value.x < P1.x + 75 && (value.y > P1.y - 75 && value.y < P1.y + 75)) {
            value.follow(P1, 50)
            value.setKind(SpriteKind.enragedEnemy)
        }
        if (value.x > P2.x - 75 && value.x < P2.x + 75 && (value.y > P2.y - 75 && value.y < P2.y + 75)) {
            value.follow(P2, 50)
            value.setKind(SpriteKind.enragedEnemy)
        }
    }
    if (enemyList.length == 0) {
        SpawnLocation = tiles.getTilesByType(sprites.dungeon.floorDark0)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        for (let index = 0; index < 20; index++) {
            EnemySprite = sprites.create(EnemyImages._pickRandom(), SpriteKind.Enemy)
            tiles.placeOnTile(EnemySprite, SpawnLocation.removeAt(randint(0, SpawnLocation.length - 1)))
            enemyList.push(EnemySprite)
        }
    }
    wave += 1
})
