const { 
    createUtilisateur,
    getUtilisateurById,
    getUtilisateur,
    updateUtilisateur,
    deleteUtilisateur 
} = require("./utilisateur.controler");

const route = require("express").Router();

route.post("/", createUtilisateur);
route.get("/", getUtilisateur);
route.get("/:id", getUtilisateurById);
route.patch("/", updateUtilisateur);
route.delete("/", deleteUtilisateur);

module.exports = route;