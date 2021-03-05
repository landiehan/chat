const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// __dirname:  ....../server
app.use(express.static(__dirname + '/../build'));

app.get('/', (req, res) => res.sendFile(__dirname + '/../build/index.html'));

io.on('connection', (socket) => {
  console.log(`Unsigned user connected: ${socket.id}`);
});

const port = process.env.PORT || 2333;
server.listen(port, () => {
  console.log(`Listening at ${port}`);
});

// Or use app.set(port, ...) as server option to set port.
