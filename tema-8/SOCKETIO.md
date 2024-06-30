# SOCKET IO

npm install socket.io
npm install socket.io-client

// Importa Socket.IO
import { Server } from "socket.io";

// Configura Socket.IO con el servidor HTTP
const io = new Server(httpsServer);

// Configura los eventos de Socket.IO
io.on("connection", (socket) => {
console.log("Nuevo cliente conectado");

    // Ejemplo: Envía un mensaje de bienvenida al cliente
    socket.emit("message", "Bienvenido al servidor!");

    // Maneja la desconexión del cliente
    socket.on("disconnect", () => {
      console.log("Cliente desconectado");
    });

});
