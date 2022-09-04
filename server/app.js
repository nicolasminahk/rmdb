const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const router = require("./routes/user");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", router);

app.get("/", (req, res) => {
  res.send("Bienvenid@s a MondongoTV");
});

mongoose
  .connect(
    "mongodb+srv://nicolas:Nicolas4234121@cluster0.pxtqyzw.mongodb.net/?retryWrites=true&w=majority", //Mi base de Datos
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Conectado a la Api");
    app.listen(port, () => {
      console.log("Api RESTful Ok, y ejecutandose...");
    });
  })
  .catch((err) => {
    console.log("No se pudo conectar", err);
  });
