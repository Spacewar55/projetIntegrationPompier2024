const { 
    createUtilisateur, 
    getUtilisateurById,
    getUtilisateur, 
    updateUtilisateur, 
    deleteUtilisateur 
} = require("./utilisateur.model");

const { genSaltSync, hashSync } = require("bcrypt");

module.exports = {
    createUtilisateur: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.motDePasse = hashSync(body.motDePasse, salt);
        createUtilisateur(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    sucess: 0,
                    message: "Erreur de connexion"
                });
            }
            return res.status(200).json({
                sucess: 1,
                data: results
            });
        });
    },
    getUtilisateurById: (req, res) => {
        const id = req.params.id;
        getUtilisateurById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    sucess: 0,
                    message: "Utilisateur non trouvé"
                });
            }
            return res.json({
                sucess: 1,
                data: results
            });
        });
    },
    getUtilisateur: (req, res) => {
        getUtilisateur((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                sucess: 1,
                data: results
            });
        });
    },
    updateUtilisateur: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.motDePasse = hashSync(body.motDePasse, salt);
        updateUtilisateur(body, (err, results) => {
            if (err) {
                console.log(err);
                return
            }
            if (!results) {
                return res.json({
                    sucess: 0,
                    message: "Impossible de modifié l'utilisateur"
                });
            }
            return res.json({
                success: 1,
                message: "Utilisateur modifié avec succès"
            });
        });
    },
    deleteUtilisateur: (req, res) => {
        const data = req.body;
        deleteUtilisateur(datan, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Utilisateur non trouvé"
                });
            }
            return res.json({
                success: 1,
                message: "Utilisateur supprimé avec succès"
            });
        });
    }
};