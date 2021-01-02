import bodyParser from "body-parser";
import { config } from "dotenv";
import express from "express";
import cors from "cors";

import { AuthentificationRoute } from "./src/routes/AuthentificationRoute";
import PasswordException from './src/exception/PasswordException';

config(); //process.env
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/auth', AuthentificationRoute);

app.listen(process.env.PORT, async() => {
    console.log(await PasswordException.hashPassword("Zoubida"));
    console.log(`Server run to http://localhost:${process.env.PORT}`);
})