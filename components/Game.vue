<!-- <template>
    <div><div id="game"></div></div>
</template>
<script type="ts">
import Phaser from 'phaser';
import config from '~/src/config';
import Game from '~/src/scenes/Game';
new Phaser.Game(
    Object.assign(config, {
        scene: [Game],
    })
)
</script>
<script>
export default {
    data() {
        return {}
    },
}
</script> -->
<template>
    <div class="hello">
        <div @click="initializeGame" class="flex">
            <a href="#1" class="btn">Initialize</a>
        </div>
        <ion-phaser v-bind:game.prop="game" v-bind:initialize.prop="initialize" />
    </div>
</template>
<script>
import Phaser from 'phaser'
export default {
    data() {
        return {
            initialize: false,
            game: {
                width: '100%',
                height: '100%',
                type: Phaser.AUTO,
                scene: {
                    init() {
                        this.cameras.main.setBackgroundColor('#24252A')
                    },
                    create() {
                        this.helloWorld = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Hello World', {
                            font: '40px Arial',
                            fill: '#ffffff',
                        })
                        this.helloWorld.setOrigin(0.5)
                    },
                    update() {
                        this.helloWorld.angle += 1
                    },
                },
            },
        }
    },
    methods: {
        initializeGame() {
            this.initialize = true
        },
    },
}
</script>
