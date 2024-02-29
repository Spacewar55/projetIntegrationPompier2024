const pool = require("../config/database");

module.exports = {
    createUtilisateur: (data, callBack) => {
        pool.query(
            `insert into utilisateur(nom, prenom, adresse, province, ville, identifiant, motDePasse, admin)
                values(?,?,?,?,?,?,?,?)`,
            [
                data.nom,
                data.prenom,
                data.adresse,
                data.province,
                data.ville,
                data.identifiant,
                data.motDePasse,
                data.admin
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUtilisateur: callBack => {
        pool.query(
            `select nom, prenom, adresse, province, ville, identifiant, motDePasse, admin from utilisateur`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUtilisateurById: (id, callBack) => {
        pool.query(
            `select nom, prenom, adresse, province, ville, identifiant, motDePasse, admin from utilisateur where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUtilisateur: (data, callBack) => {
        pool.query(
            `update utilisateur set id=?, nom=?, prenom=?, adresse=?, province=?, ville=?, identifiant=?, motDePasse=?, admin=? where id = ?`,
            [
                data.id,
                data.nom,
                data.prenom,
                data.adresse,
                data.province,
                data.ville,
                data.identifiant,
                data.motDePasse,
                data.admin
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteUtilisateur: (data, callBack) => {
        pool.query(
            `delete from utilisateur where id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
}