namespace SpriteKind {
    export const Scenery = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
    if (mySprite.overlapsWith(myEnemy)) {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        myEnemy.sayText("попустись", 1000, true)
        for (let value of sprites.allOfKind(SpriteKind.Player)) {
            value.setVelocity(0, 0)
            value.ax = 0
            value.ay = 0
        }
        pause(2000)
        scene.cameraShake(4, 500)
        sprites.destroy(mySprite, effects.bubbles, 1000)
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
        pause(2000)
        game.setGameOverMessage(true, "ПОПУСТИЛО")
        game.setGameOverPlayable(true, music.createSong(assets.song`main theme`), true)
        game.gameOver(true)
        pause(5000)
        game.splash("наступного дня...")
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Sine, 1, 528, 225, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
	
})
sprites.onCreated(SpriteKind.Player, function (sprite) {
	
})
let otherSprite: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
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
    `, SpriteKind.Player)
mySprite.setStayInScreen(false)
mySprite.setFlag(SpriteFlag.Invisible, true)
myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . b b 3 3 3 3 b b . . . . 
    . . . c b 3 3 3 3 1 1 b c . . . 
    . . c b 3 3 3 3 3 1 1 1 b c . . 
    . c b 1 1 1 3 3 3 3 1 1 3 c c . 
    c b d 1 1 1 3 3 3 3 3 3 3 b b c 
    c b b d 1 3 3 3 3 3 1 1 1 b b c 
    c b b b 3 3 1 1 3 3 1 1 d d b c 
    . c b b b d d 1 1 3 b d d d c . 
    . . c c b b d d b b b b c c . . 
    . . . . c c c c c c c c . . . . 
    . . . . . b b d 1 1 b . . . . . 
    . . . . . b d d 1 1 b . . . . . 
    `, SpriteKind.Enemy)
myEnemy.setStayInScreen(false)
myEnemy.changeScale(-0.5, ScaleAnchor.Middle)
myEnemy.setPosition(30, 30)
myEnemy.setFlag(SpriteFlag.Invisible, true)
pause(1000)
music.play(music.createSong(assets.song`main theme_evil`), music.PlaybackMode.LoopingInBackground)
game.splash("мітинги, коли, стендапи", "та скільки можна")
mySprite.setFlag(SpriteFlag.Invisible, false)
mySprite.sayText(":(", 5000, false)
pause(2000)
mySprite.setFlag(SpriteFlag.Invisible, true)
if (game.ask("прогулятись в лісі?", "A-так B-ні")) {
    music.stopAllSounds()
    mySprite.setFlag(SpriteFlag.Invisible, false)
    pause(500)
    mySprite.sayText(":(", 5000, false)
    mySprite.sayText(":)", 5000, false)
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
    pause(1000)
    music.play(music.createSong(assets.song`main theme_spooky`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level1`)
    scene.setBackgroundColor(7)
    scene.cameraFollowSprite(mySprite)
    effects.blizzard.startScreenEffect()
    otherSprite = sprites.create(img`
        .............6666...............
        ..........666667766.6666........
        .........677777777767776........
        ......66667775577757777666......
        .....677666675557557776777666...
        .....6776777775555577777766776..
        ...66666777777775777777766666...
        .66667767777755757555777776776..
        6666777677775577557555777767766.
        .6667767777777775577777777767666
        .c6766777677777775777777677766..
        cc77666667777777777777777666666c
        cc76666677777777777777777766776c
        c6666776777777777777766677666776
        66667766667776777767767766766666
        ccc76677677776677766767776776ccc
        cc7766776777677677676667767766cc
        .666c676667677766667766666666cc.
        .ccc66676666776666677677666cccc.
        ...ccc77c6767666676676677666ccc.
        ...cc676c7766676677666666c666cc.
        ....c6cc676c6677677c66c666ccc...
        ....ccccc6c66667667cc6ccc6ccc...
        ......ccccc66c66c66cccccccc.....
        .......cc.cc6c6ccc6cccc.cc......
        ...........cccccccccc...........
        .............feeeeee............
        ............feeeeeefe...........
        .........eeeeefeeeffee..........
        ............ffffeef..ee.........
        ...............fee..............
        ................e...............
        `, SpriteKind.Scenery)
    otherSprite.setPosition(62, 16)
    game.splash("всі проблеми", "позаду...")
    game.splash("ліс великий,", "дерев багато...")
    game.splash("...тут мене ніхто", "не знайде.")
    myEnemy.setFlag(SpriteFlag.Invisible, false)
    controller.moveSprite(mySprite, 50, 50)
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        value.setVelocity(0, 0)
        value.ax = 0
        value.ay = 0
    }
    if (game.runtime() > 2000) {
        myEnemy.sayText(":)")
        myEnemy.follow(mySprite, 5)
    }
} else {
    scene.setBackgroundColor(2)
    music.stopAllSounds()
    pause(500)
    game.setGameOverMessage(false, "ВИГОРІВ")
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverPlayable(false, music.createSong(assets.song`death`), true)
    game.gameOver(false)
    pause(5000)
}
forever(function () {
    if (mySprite.vx != 0 || mySprite.vy != 0) {
        music.play(music.createSoundEffect(
        WaveShape.Triangle,
        randint(1, 20),
        randint(250, 450),
        156,
        0,
        randint(50, 200),
        SoundExpressionEffect.None,
        InterpolationCurve.Curve
        ), music.PlaybackMode.InBackground)
        pause(100)
    }
})
