const socket = io();

let connectionCount = document.getElementById('connection-count');
let statusMessage = document.getElementById('status-message');

socket.on('usersConnected', function (count) {
  connectionCount.innerText = 'Connected Users: ' + count;
});

socket.on('statusMessage', function (message) {
  statusMessage.innerText = message;
})