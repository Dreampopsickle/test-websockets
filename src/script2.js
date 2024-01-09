const socket = new WebSocket('ws://localhost:5501');

socket.addEventListener('open', function(event) {
    console.log('Connected to WS server');
});

socket.addEventListener('message', function (event) {
    console.log('Message from server', event.data);
});

const sendMessage = () => {
    socket.send('Hello from Client2!')
}