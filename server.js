import express from "express";
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import cors from "cors";
import mongoose from "mongoose";
import tuitsController from "./controllers/tuits-controller.js";

const app = express();
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb://localhost:27017/fsd'
mongoose.connect(CONNECTION_STRING);

app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
app.use(cors());

app.listen(process.env.PORT || 4000);


