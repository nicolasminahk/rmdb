const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes");
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api", router);

app.get("/", (req, res) => {
  //---ACA APARECERIA EL POPULAR TOP MEDIA?
  res.send("Bienvenid@s a MondongoTV");
});
// app.use(session({
//   secret: 'supersecretstring12345!',
//   saveUninitialized: true,
//   resave: true,
//   store: new MongoStore({ mongooseConnection: db })
// }))
// -----------------Persistencia------------
// /* global EventEmitter, events, io, Peer */
// /** @jsx React.DOM */

// $(function () {
//   "use strict";

//   // Check for session value
//   $(document).ready(function () {
//     $.ajax({
//       url: "/username",
//     }).done(function (data) {
//       console.log("data loaded: " + data.username);
//       if (data.username) initChat($("#container")[0], data.username);
//     });
//   });

//   // Set the session
//   $("#connect-btn").click(function () {
//     var data = JSON.stringify({ username: $("#username-input").val() });
//     $.ajax({
//       url: "/username",
//       method: "POST",
//       data: data,
//       contentType: "application/json",
//       dataType: "json",
//     });
//   });

//   // Initialize the chat
//   $("#connect-btn").click(function () {
//     initChat($("#container")[0], $("#username-input").val());
//   });

//   function initChat(container, username) {
//     var proxy = new ChatServer();
//     React.renderComponent(
//       <ChatBox chatProxy={proxy} username={username}></ChatBox>,
//       container
//     );
//   }

//   window.onbeforeunload = function () {
//     return "Are you sure you want to leave the chat?";
//   };
// });

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/src/index.html");
//   if (req.session.username == undefined) {
//     console.log("# Username not set in session yet");
//   } else {
//     console.log("# Username from session: " + req.session.username);
//   }
// });
mongoose
  .connect(
    "mongodb+srv://nicolas:Nicolas4234121@cluster0.pxtqyzw.mongodb.net/?retryWrites=true&w=majority", //Mi base de Datos
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Conectado a la Api");
    app.listen(process.env.PORT, () => {
      console.log("Api RESTful Ok, y ejecutandose...");
    });
  })
  .catch((err) => {
    console.log("No se pudo conectar", err);
  });
