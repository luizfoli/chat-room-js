const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));


io.on('connection', (socket) => {

    const user = createUser(socket.id);
    console.log(`User with id ${user.id} connected`);

    socket.on('disconnect', () => {
        console.log(`User with id ${user.id} disconnected`);
    });

    socket.on('message', () => {
        console.log(`User with id ${user.id} try to communicate`)
    })
});


http.listen(PORT, () => {
    console.log(`Server it's running in port ${PORT}`);
});   

function createUser(id) {
    return {
        id
    };
}