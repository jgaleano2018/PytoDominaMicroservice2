import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRoute from "./src/app/controllers/user.routes.js";
import userRolTask from "./src/app/controllers/userTask.routes.js";
import task from "./src/app/controllers/task.routes.js";

dotenv.config();

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// api routes
app.use("/", userRoute);
app.use("/", userRolTask);
app.use("/", task);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to api login application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});