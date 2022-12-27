import Phaser from 'phaser'

export class Player extends Phaser.Physics.Arcade.Sprite {
    public isMoving: boolean
    constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
        super(scene, x, y, key)
        scene.physics.add.existing(this)
        this.scene.add.existing(this)
        this.isMoving = false
    }
    preload() {}
    create() {
        this.initializePlayer()
    }
    update({ delta, cursors }: { delta: number | undefined; cursors: Phaser.Types.Input.Keyboard.CursorKeys }) {
        if (cursors.left.isDown) {
            if (!this.isMoving) {
                this.isMoving = true
                this.playerLeft()
            }
        } else if (cursors.right.isDown) {
            if (!this.isMoving) {
                this.isMoving = true
                this.playerRight()
            }
        } else if (cursors.down.isDown) {
            if (!this.isMoving) {
                this.isMoving = true
                this.playerDown()
            }
        } else if (cursors.up.isDown) {
            if (!this.isMoving) {
                this.isMoving = true
                this.playerUp()
            }
        }
    }
    initializePlayer() {
        // this.scene.physics.add.sprite(100, 192, 'player')
        this.setCollideWorldBounds(true)
        this.setSize(32, 32)
        this.setOffset(0, 16)
        this.scene.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
            frameRate: 10,
            repeat: 0,
        })
        this.scene.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
            frameRate: 10,
            repeat: 0,
        })
        this.scene.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
            frameRate: 10,
            repeat: 0,
        })
        this.scene.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: 0,
        })
    }
    playerLeft() {
        this.scene.tweens.add({
            targets: this,
            x: this.x - 16 * 2,
            duration: 200,
            yoyo: false,
            onComplete: function () {
                ;(this as any).isMoving = false
            },
            onCompleteScope: this,
        })
        this.anims.play('left')
    }
    playerRight() {
        this.scene.tweens.add({
            targets: this,
            x: this.x + 16 * 2,
            duration: 200,
            yoyo: false,
            onComplete: function () {
                ;(this as any).isMoving = false
            },
            onCompleteScope: this,
        })
        this.anims.play('right')
    }
    playerUp() {
        this.scene.tweens.add({
            targets: this,
            y: this.y - 16 * 2,
            duration: 200,
            yoyo: false,
            onComplete: function () {
                ;(this as any).isMoving = false
            },
            onCompleteScope: this,
        })
        this.anims.play('up')
    }
    playerDown() {
        this.scene.tweens.add({
            targets: this,
            y: this.y + 16*2,
            duration: 200,
            yoyo: false,
            onComplete: function () {
                ;(this as any).isMoving = false
            },
            onCompleteScope: this,
        })
        this.anims.play('down')
    }
    setMoving(isMoving: boolean): void {
        this.isMoving = isMoving
    }
}
