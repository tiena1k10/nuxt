<template>
    <div id="game"></div>
</template>
<script lang="ts">
import config from '@/src/config'
import GameScene from '@/src/scenes/Game'
import Phaser from 'phaser'
new Phaser.Game(
    Object.assign(config, {
        scene: [GameScene],
    })
)
</script>
<script>
import Vue from 'vue'
export default Vue.extend({
    mounted() {
        new Phaser.Game(
            Object.assign(config, {
                scene: [GameScene],
            })
        )
    },
})
</script>
