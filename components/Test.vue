<template>
    <div><div id="game"></div></div>
</template>
<script lang="ts">
import Phaser from 'phaser'
import config from '~/src/config'
import { Demo } from '@/src/scenes/Game'
import Vue from 'vue'
import {io,Socket } from 'socket.io-client'
import {  SOCKET_EVENT_USER_JOIN_MAIN_SCREEN } from '~/src/common/socket/socket.event'

export default Vue.extend({
    data() {
        return {}
    },
    mounted() {
        const socket = io('ws://127.0.0.1:7880').connect();
        socket.on('connect', () => {
            console.log('Successfully connected!')
        })
        new Phaser.Game(
            Object.assign(config, {
                scene: [new Demo(socket)],
            })
        )
    },
})
</script>
