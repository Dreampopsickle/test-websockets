const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({ server: server });
wss.on('connection', function connection(ws) {
    console.log('A new client connected!')
    ws.send('Welcome New Client!');

    ws.on('message', function incoming(message) {
        console.log('recieved: %s', message);
        ws.send('Got ur msg its: ' + message);
    });

    ws.send('something');
});

app.get('/', (req, res) => res.send('Hello World'));

server.listen(5501, () => console.log('Listening on port :5501'));