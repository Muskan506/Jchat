// node server which will handle socket io
const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// const users = {};


io.on('connection', socket =>{
    console.log("user connected with " + socket.id);
    socket.on("message", ({ name, message }) => {
      io.emit("message", { name, message });
    });
    socket.on("disconnect", function () {
      console.log("user disconnected " + socket.id);
    });
  });
http.listen(4001, function () {
    console.log("listening on port 4001");
  });