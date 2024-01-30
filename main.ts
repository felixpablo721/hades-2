namespace SpriteKind {
    export const killExplosion = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const powerUP = SpriteKind.create()
}
// changes player sprite to face direction of movement
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
    attack(P1)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    attack(P2)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    P2.setImage(img`
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
function attack (playerSprite: Sprite) {
    // Shoots projectile when the time after a successful attack surpasses the minimum time of .5 seconds
    if (game.runtime() - Lastpressed >= timebetweenpress) {
        for (let index = 0; index < projectileAmount; index++) {
            if (playerSprite.image.equals(img`
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
                    `, playerSprite, 0 - projectileSpeed, 0)
            } else if (playerSprite.image.equals(img`
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
                    `, playerSprite, projectileSpeed, 0)
            } else if (playerSprite.image.equals(img`
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
                    `, playerSprite, 0, 0 - projectileSpeed)
            } else if (playerSprite.image.equals(img`
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
                    `, playerSprite, 0, projectileSpeed)
            }
            projectile.setScale(projectileSize, ScaleAnchor.Middle)
            pause(100)
        }
    }
    Lastpressed = game.runtime()
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    P2.setImage(img`
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
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (otherSprite.image.equals(P1.image)) {
        info.changeLifeBy(-1)
        splitScreen.cameraShake(splitScreen.Camera.Camera1, 4, 500)
    } else {
        info.player2.changeLifeBy(-1)
        splitScreen.cameraShake(splitScreen.Camera.Camera2, 4, 500)
    }
    enemyList.removeAt(enemyList.indexOf(sprite))
    sprite.setKind(SpriteKind.killExplosion)
    sprite.setVelocity(0, 0)
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `],
    100,
    false
    )
    pause(300)
    sprites.destroy(sprite)
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
function modifyAttack (powerUP: Sprite) {
    if (powerUP.image.equals(img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `)) {
        projectileSize += 1
    } else if (powerUP.image.equals(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `)) {
        projectileSpeed += 50
    } else {
        projectileAmount += 1
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprite.setKind(SpriteKind.killExplosion)
    sprite.setVelocity(0, 0)
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `],
    100,
    false
    )
    pause(300)
    enemyList.removeAt(enemyList.indexOf(otherSprite))
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.powerUP, function (sprite, otherSprite) {
    if (sprite.image.equals(P1.image)) {
        powerListP1.push(otherSprite)
    } else {
        powerListP2.push(otherSprite)
    }
    powerList.removeAt(powerList.indexOf(otherSprite))
    modifyAttack(otherSprite)
    sprites.destroy(otherSprite)
})
let boss: Sprite = null
let EnemySprite: Sprite = null
let powerSprite: Sprite = null
let SpawnLocation: tiles.Location[] = []
let projectile: Sprite = null
let projectileSpeed = 0
let projectileSize = 0
let projectileAmount = 0
let timebetweenpress = 0
let Lastpressed = 0
let powerListP2: Sprite[] = []
let powerListP1: Sprite[] = []
let powerList: Sprite[] = []
let enemyList: Sprite[] = []
let P2: Sprite = null
let P1: Sprite = null
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`map`)
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
let powerSpritesList = [img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, img`
    4 4 4 . . 4 4 4 4 4 . . . . . . 
    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
    . . . . c c b 4 4 4 b b 4 5 4 4 
    . . . . . . c c c c c c b b 4 . 
    `]
splitScreen.setSplitScreenEnabled(true)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, P1)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, P2)
splitScreen.setBorderColor(15)
enemyList = []
powerList = []
powerListP1 = []
powerListP2 = []
let wave = 0
Lastpressed = 0
// Sets time between attack outputs to be at minimum of .5 seconds
timebetweenpress = 500
info.setLife(3)
info.player2.setLife(3)
projectileAmount = 1
projectileSize = 1
projectileSpeed = 150
game.onUpdate(function () {
    // Makes enemy follow player after player enters its 75 pixel radius
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.x > P1.x - 75 && value.x < P1.x + 75 && (value.y > P1.y - 75 && value.y < P1.y + 75)) {
            value.follow(P1, 25)
            // Changes sprite kind to avoid enemies to constantly switch between players
            value.setKind(SpriteKind.Enemy)
        } else if (value.x > P2.x - 75 && value.x < P2.x + 75 && (value.y > P2.y - 75 && value.y < P2.y + 75)) {
            value.follow(P2, 25)
            value.setKind(SpriteKind.Enemy)
        }
    }
    // Spawns enemies in increasing amounts each time every enemy is eliminated
    if (enemyList.length == 0) {
        // Enemies spawn in random floor tiles
        SpawnLocation = tiles.getTilesByType(sprites.dungeon.floorDark0)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        if (wave >= 1) {
            // Initially spawns 10 enemies, but increases by 10 every wave/every iteration of enemy spawning.
            for (let index = 0; index < 3; index++) {
                powerSprite = sprites.create(powerSpritesList._pickRandom(), SpriteKind.powerUP)
                tiles.placeOnTile(powerSprite, SpawnLocation.removeAt(randint(0, SpawnLocation.length - 1)))
                powerList.push(powerSprite)
            }
        }
        if (wave < 3) {
            // Initially spawns 10 enemies, but increases by 10 every wave/every iteration of enemy spawning.
            for (let index = 0; index < 10 + wave * 10; index++) {
                EnemySprite = sprites.create(EnemyImages._pickRandom(), SpriteKind.Enemy)
                tiles.placeOnTile(EnemySprite, SpawnLocation.removeAt(randint(0, SpawnLocation.length - 1)))
                enemyList.push(EnemySprite)
            }
            wave += 1
        } else {
            let myEnemy: Sprite[] = []
            boss = sprites.create(img`
                ..............ccccccccc........
                ............cc555555555cc......
                ...........c5555555555555c.....
                ..........c55555555555555dc....
                .........c555555555555b5bdc....
                .........555bc1555555555bdcccc.
                ........c555ccc55555555bbdccddc
                ........c555bcb5555555ccddcdddc
                .......c555555555551ccccddbdddc
                .......c555555b555c1cccbddbbdbc
                .......c5555555bbc33333ddddbcc.
                .......c555555555bc333555ddbc..
                .......c5555555555555555555c...
                .......cd555555555555cccc555c..
                .......cd55555555555c555c555c..
                .......cdd555555555b5555b555c..
                .......cddd55555ddbb555bb555c..
                .......cdddd55555555555b5555c..
                .......cddddd5555555ddb5555dc..
                c......cdddddd555555555555dcc..
                cc...ccddddddd555555555555dc...
                cdccccdddddd555555d55555ddcc...
                cdddddddddbd5555555ddddddccccc.
                ccdddddddbb55555555bddddccbddc.
                .ccddddddbd55555555bdddccdddc..
                ..cccddddbd5555555cddcccddbc...
                ....ccccccd555555bcccc.cccc....
                .........cc555555bc............
                .........cc55555555c...........
                ..........cccccccccc...........
                `, SpriteKind.boss)
            myEnemy.push(sprites.create(img`
                ..............ccccccccc........
                ............cc555555555cc......
                ...........c5555555555555c.....
                ..........c55555555555555dc....
                .........c555555555555b5bdc....
                .........555bc1555555555bdcccc.
                ........c555ccc55555555bbdccddc
                ........c555bcb5555555ccddcdddc
                .......c555555555551ccccddbdddc
                .......c555555b555c1cccbddbbdbc
                .......c5555555bbc33333ddddbcc.
                .......c555555555bc333555ddbc..
                .......c5555555555555555555c...
                .......cd555555555555cccc555c..
                .......cd55555555555c555c555c..
                .......cdd555555555b5555b555c..
                .......cddd55555ddbb555bb555c..
                .......cdddd55555555555b5555c..
                .......cddddd5555555ddb5555dc..
                c......cdddddd555555555555dcc..
                cc...ccddddddd555555555555dc...
                cdccccdddddd555555d55555ddcc...
                cdddddddddbd5555555ddddddccccc.
                ccdddddddbb55555555bddddccbddc.
                .ccddddddbd55555555bdddccdddc..
                ..cccddddbd5555555cddcccddbc...
                ....ccccccd555555bcccc.cccc....
                .........cc555555bc............
                .........cc55555555c...........
                ..........cccccccccc...........
                `, SpriteKind.boss))
            tiles.placeOnTile(boss, tiles.getTileLocation(8, 8))
        }
    }
})
