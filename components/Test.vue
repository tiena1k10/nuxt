<template>
    <div><div id="game"></div></div>
</template>
<script lang="ts" type="module">
import { Game } from 'phaser'
import { config } from '../config'
import { x, Demo } from '../scenes/Demo'
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {}
    },
    mounted() {
        new Game(
            Object.assign(config, {
                scene: [Demo],
            })
        )
    },
})
</script>
