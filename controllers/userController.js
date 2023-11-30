import { UserModel } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;

export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "El nombre de usuario ya esta en uso" });
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Usuario registrado con exito" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error en el servidor al registrar usuario" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });
    if (!user) {
      return res
        .status(401)
        .json({ error: "Nombre de usuario o contraseña incorrecta" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "Nombre de usuario o contraseña incorrecta" });
    }

    const token = jwt.sign({ userId: user._id }, "secreto", {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor al iniciar sesion" });
  }
};
