import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import { MenuRouter } from "./src/routes/menuRoute.js";
import { LoginRouter } from "./src/routes/loginRoute.js";
import { SettingRouter } from "./src/routes/settingRoute.js";
import { Session } from "./src/middleware/session.js";
import { authenticate } from "./src/middleware/authenticate.js";
import { sqlConfig } from "./src/db/mssql.js";
import sql from "mssql";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.set("trust proxy", process.env.ENVIRONMENT === "production");

// database connection setup
const appPool = new sql.ConnectionPool(sqlConfig);

// cors setup
const whitelist = new Set(["http://example.com"]);
const corsOptions = {
  optionsSuccessStatus: 200,
  origin: function (origin, callback) {
    if (true) {
      // condition to check whitelist if(whitelist.has(origin))
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by CORS"));
    }
  },
  credentials: true,
};
// app.options("*", corsOptions);
app.use(cors(corsOptions));

app.use(Session);

app.use("/admin/login", LoginRouter);
app.use("/menu/list", authenticate, MenuRouter);
app.use("/admin/setting", authenticate, SettingRouter);

const PORT = process.env.port || 5000;

appPool
  .connect()
  .then(function (pool) {
    app.locals.db = pool;
    console.log("Database Connected.");
  })
  .catch(function (err) {
    console.error("Error creating connection pool", err);
  });
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});

export default app;
