import { Server } from "socket.io";

const io = new Server({
  //writing a url in cors that will be the only url to reach this server and that would be our react app.
  cors: {
    origin: "http://localhost:3000",
  },
});
io.on("connection", (socket) => {
  console.log(socket);
  console.log("someone has connected");
  socket.on("disconnect", () => {
    console.log("someone has disconnected");
  });
});
io.listen(5000);
