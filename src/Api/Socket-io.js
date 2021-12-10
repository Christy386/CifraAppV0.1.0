import { io } from "socket.io-client";
const socket = io('https://testonlynodereplit.christy386.repl.co/');

var DB

socket.on('connection', data => {
  console.log(data)
  socket.emit('hello', 'Hello server Native')
})
socket.on('db', data => {
  DB = data;
  console.log(DB)
})

export default socket