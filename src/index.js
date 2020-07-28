const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

let userIndex = 0;

io.on('connection', (socket) => {

    const thisUser = userIndex;
    userIndex++;


    console.log(`a user ${thisUser} connected`);
    socket.on('disconnect', () => {
      console.log(`user ${thisUser} disconnected`);
    });
  });


http.listen(PORT, () => {
    console.log(`Server it's running in port ${PORT}`);
});   
