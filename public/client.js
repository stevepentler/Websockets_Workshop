 "use strict";

const socket = io();

let connectionCount = document.getElementById('connection-count');
let statusMessage = document.getElementById('status-message');
let buttons = document.querySelectorAll('#choices button');

socket.on('usersConnected', function (count) {
  connectionCount.innerText = 'Connected Users: ' + connectionCount;
});

socket.on('statusMessage', function (message) {
  statusMessage.innerText = message;
})

socket.on('voteCount', function (votes) {
  console.log(votes);
})

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    socket.send('voteCast', this.innerText);
  });
}