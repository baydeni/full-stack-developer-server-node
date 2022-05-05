import express from "express";
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import cors from "cors";
import tuitsController from "./controllers/tuits-controller.js";

const app = express();
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
app.use(cors());

app.listen(process.env.PORT || 4000);
