import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { userRouter } from "./routes/userRoutes.js";
import { postRouter } from "./routes/postRoutes.js";
import { commentRouter } from "./routes/commentRoutes.js";
import { startConnection } from "./settings/database.js";
import { config } from "./settings/config.js";

const app = express();
//const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); //analiza y procesa los datos de solicitudes HTTP, como JSON o datos de formulario
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/posts", postRouter);
app.use("/", commentRouter);

app.listen(config.port, async () => {
  await startConnection({ uri: config.mongo, database: config.database });
  console.log("Server is running on port: http://localhost:" + config.port);
});
