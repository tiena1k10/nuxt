<template>
    <div>
        <Test></Test>
    </div>
</template>
<script>
import io from 'socket.io-client'
import { SOCKET_EVENT_JOIN } from '~/src/common/socket/socket.event'
export default {
    data() {
        return {}
    },
    mounted() {
        const socket = io.connect('ws://127.0.0.1:7880')
        socket.on('connect', () => {
            console.log('Successfully connected!')
        })
        socket.emit(SOCKET_EVENT_JOIN, { a: 'b', c: [] })
    },
}
</script>
<style></style>
