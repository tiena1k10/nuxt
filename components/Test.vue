<template>
    <div><div id="game"></div></div>
</template>
<script lang="ts">
import Phaser from 'phaser'
import config from '~/src/config'
import { Demo } from '@/src/scenes/Game'
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {}
    },
    mounted() {
        new Phaser.Game(
            Object.assign(config, {
                scene: [Demo],
            })
        )
    },
})
</script>
