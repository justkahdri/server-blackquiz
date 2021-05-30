require("dotenv/config");

const express = require("express");

const app = express();
const server = require("http").Server(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT;

io.on("connection", (socket) => {
  socket.on("new-room", (roomName) => {
    console.log(roomName);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(PORT, () => {
  console.log("Listening at *:", PORT);
});
