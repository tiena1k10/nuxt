import Phaser from 'phaser'

export class Demo extends Phaser.Scene {
    constructor() {
        super('Demo')
    }
    preload() {
        this.load.image('logo', require('~/assets/images/phaser3-logo.png'))
        this.load.image('sheet', require('~/assets/map/tilesheet.png'))
        this.load.image('player', require('~/assets/images/sprites/sprite.png'))

        this.load.tilemapTiledJSON('map', require('~/assets/map/example_map.json'))
    }
    create() {
        const map = this.make.tilemap({ key: 'map', tileWidth: 64, tileHeight: 64 })
        const tilet = map.addTilesetImage('tilesheet', 'sheet')
        const layer = map.createLayer('ground', tilet, 0, 0)
        const laye6r4 = map.createLayer('groundvariations', tilet, 0, 0)
        const laye6r3 = map.createLayer('mud', tilet, 0, 0)
        const laye6r = map.createLayer('grass', tilet, 0, 0)
        const laye6r1 = map.createLayer('stone', tilet, 0, 0)
        const laye6r2 = map.createLayer('grassvariations', tilet, 0, 0)
        const laye5r = map.createLayer('river', tilet, 0, 0)
        const laye4r = map.createLayer('Houses', tilet, 0, 0)
        const laye3r = map.createLayer('camps', tilet, 0, 0)
        const layer2 = map.createLayer('Trees2', tilet, 0, 0)
        const Bridge = map.createLayer('Bridge', tilet, 0, 30)

        // const player = this.add.sprite(100, 100, 'player')

        // const arr = [
        //     [0, 1, 2],
        //     [0, 1, 2],
        //     [0, 1, 2],
        // ]
        // // this.add.image(20, 20, 'logo')
        // const map = this.make.tilemap({data:arr, tileHeight : 64,tileWidth: 64})
        // map.addTilesetImage('titles')
        // const layer = map.createLayer(0,'titles',0,0)
        // console.log(layer);
        // console.log(map);
        // console.log("a");
    }
}
