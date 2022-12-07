import Phaser from 'phaser'

export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
        super(scene, x, y, key)
        scene.physics.add.existing(this)
        this.scene.add.existing(this)
    }

    update({ delta, cursors }: { delta: number | undefined, cursors: Phaser.Types.Input.Keyboard.CursorKeys }) {
        if (cursors.left.isDown) {
            this.setVelocityX(-160)
            this.anims.play('left', true)
        } else if (cursors.right.isDown) {
            this.setVelocityX(160)
            this.anims.play('right', true)
        } else if (cursors.down.isDown) {
            this.setVelocityY(160)
            this.anims.play('turn', true)
        } else if (cursors.up.isDown) {
            this.setVelocityY(-160)
            this.anims.play('turn', true)
        }
    }
}
