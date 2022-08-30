const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Bienvenid@s a MondongoTV");
});

app.listen(port, () => {
  console.log(`El servidor esta escuchando en el puerto  ${port}`);
});
