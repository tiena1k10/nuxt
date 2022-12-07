import Phaser from 'phaser'
import { Player } from './Player'

export class Demo extends Phaser.Scene {
    player: Player | null
    constructor() {
        super('Demo')
    }
    preload() {
        this.load.image('logo', require('~/assets/images/phaser3-logo.png'))
        this.load.image('sheet', require('~/assets/map/tilesheet.png'))
        this.load.spritesheet('dude', require('~/assets/images/dude.png'), { frameWidth: 32, frameHeight: 48 })
        this.load.tilemapTiledJSON('map', require('~/assets/map/example_map.json'))
    }
    create() {
        const map = this.make.tilemap({ key: 'map', tileWidth: 64, tileHeight: 64 })
        const tilet = map.addTilesetImage('tilesheet', 'sheet')
        map.createLayer('ground', tilet, 0, 0)
        map.createLayer('groundvariations', tilet, 0, 0)
        map.createLayer('mud', tilet, 0, 0)
        map.createLayer('grass', tilet, 0, 0)
        map.createLayer('stone', tilet, 0, 0)
        map.createLayer('grassvariations', tilet, 0, 0)
        map.createLayer('river', tilet, 0, 0)
        map.createLayer('Houses', tilet, 0, 0)
        map.createLayer('camps', tilet, 0, 0)
        map.createLayer('Trees2', tilet, 0, 0)
        map.createLayer('Bridge', tilet, 0, 30)
        this.player = new Player(this, 100, 450, 'dude')
        this.player.setBounce(0.2)
        this.player.setCollideWorldBounds(true)

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1,
        })

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20,
        })

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1,
        })
    }
    update(time: number, delta: number): void {
        const cursors = this.input.keyboard.createCursorKeys()
        this.player?.update({ delta, cursors })
    }
    
}
