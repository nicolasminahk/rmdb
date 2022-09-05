const Usuario = require("../models/user");
const bcrypt = require("bcrypt");
const { getAllMovies } = require("./media.services");

class userServices {
  static async getUsers() {
    try {
      const user = await Usuario.find({ status: true });
      return { data: user, error: false };
    } catch {
      return { data: "No se encontró", error: true };
    }
  }

  static async createUser(body) {
    try {
      const result = await Usuario.findOne({ email: body.email });
      if (result) {
        return { data: "Este email ya esta registrado ", error: true };
      }
      if (!result) {
        let usuario = new Usuario({
          email: body.email,
          nombre: body.nombre,
          password: bcrypt.hashSync(body.password, 10),
        });
        const resultado = await usuario.save();
        console.log(resultado);
        return { data: resultado, error: false };
      }
    } catch (err) {
      return { data: err, error: true };
    }
  }

  static async putUser(email, body) {
    try {
      let user = await Usuario.findOneAndUpdate(
        email,
        {
          $set: {
            nombre: body.nombre,
            password: body.password,
          },
        },
        { new: true } //Debería estar enviado el actualizado?
      );

      return { data: user, error: false };
    } catch (err) {
      return { data: err, error: true };
    }
  }

  static async deleteUser(email) {
    try {
      const result = Usuario.findByIdAndUpdate(
        email,
        {
          $set: { status: false },
        },
        { new: true }
      );
      return { data: result, error: false };
    } catch (error) {
      return { data: error, error: true };
    }
  }
  static async postFavs(body) {
    try {
      console.log(body);
      return await Usuario.updateOne(
        { _id: user_id },
        {
          $favorites: {
            $addToSet: { _id: movies.id }, //--->Como comparo con el movie id?
          },
        },
        { new: true }
      );
    } catch (error) {
      return { data: error, error: true };
    }
  }

  static async deleteFavs() {}

  //push al arreglo, cuando el _id de la pelicula
  //no esta en el arreglo, lo sumo

  //actualizar el usuario, update

  //{new: true} ---> mandar el actualizado
}

module.exports = userServices;
