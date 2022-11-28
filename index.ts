import Phaser from 'phaser'
import { config } from './config'
import { Demo } from './scenes/Demo'

new Phaser.Game(
    Object.assign(config, {
        scene: [Demo],
    })
)
