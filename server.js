const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('Um usuário conectado');

  socket.on('mensagem', (mensagem) => {
    console.log('Mensagem recebida:', mensagem);
    io.emit('mensagem', mensagem);
  });

  socket.on('disconnect', () => {
    console.log('Um usuário desconectado');
  });
});

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
