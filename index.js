import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import { MenuRouter } from "./src/routes/menuRoute.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

app.use("/menu/list", MenuRouter);

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});

export default app;
