require("dotenv").config();
const express = require("express");
const app = express();
const utilisateurRoute = require("./utilisateurs/utilisateur.route");

app.use(express.json());

app.use("/api/utilisateur", utilisateurRoute);

app.listen(process.env.APP_PORT,()=>{
    console.log("Le serveur tourne sur le port : ", process.env.APP_PORT);
})