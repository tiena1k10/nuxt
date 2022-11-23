<template>
    <div><div id="game"></div></div>
</template>
<script lang="ts">
import Phaser from 'phaser'
import config from '~/src/config'
import Game from '~/src/scenes/Game'
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
</script>
