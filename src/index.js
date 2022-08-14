const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const port = 3001;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connect');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
})

server.listen(port, () => {
    console.log(`app listening in port ${port}`)
})