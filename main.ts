controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    SpawnLocation = tiles.getTilesByType(sprites.dungeon.darkGroundNorthWest0)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    for (let index = 0; index < 20; index++) {
        EnemySprite = sprites.create(EnemyImages._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(EnemySprite, SpawnLocation.removeAt(randint(0, SpawnLocation.length - 1)))
    }
})
let EnemySprite: Sprite = null
let SpawnLocation: tiles.Location[] = []
let EnemyImages: Image[] = []
let P1 = sprites.create(img`
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
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`level1`)
EnemyImages = [assets.image`myImage`, assets.image`myImage0`, assets.image`myImage1`]
scene.cameraFollowSprite(P1)
tiles.placeOnTile(P1, tiles.getTileLocation(0, 0))
P1.setStayInScreen(true)
let P2 = sprites.create(img`
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
tiles.placeOnTile(P2, tiles.getTileLocation(0, 0))
P2.setStayInScreen(true)
let cameracenter = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c . . . . . . 
    . . . . . . a b a a . . . . . . 
    . . . . . c b a f c a c . . . . 
    . . . . c b b b f f a c c . . . 
    . . . . b b f a b b a a c . . . 
    . . . . c b f f b a f c a . . . 
    . . . . . c a a c b b a . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdate(function () {
    cameracenter.setPosition((P1.x + P2.x) / 2, (P1.y + P2.y) / 2)
})
