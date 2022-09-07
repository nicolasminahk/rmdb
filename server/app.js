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
