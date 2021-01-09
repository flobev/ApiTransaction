import Utilisateur from "./Utilisateur";
import MySQL from '../db/MySQL';

import EmailException from '../exception/EmailException';
import PasswordException from '../exception/PasswordException';
import { jointureInterface } from '../db/MySQL';

export default class Tuteur extends Utilisateur {

    email: string;
    mdp: string = '';
    utilisateur_id_utilisateur: number | null | undefined;

    protected table: string = 'tuteur';

    constructor(id: Utilisateur, email: string = '', mdp: string = ''){
        super(id);

        if (EmailException.checkEmail(email)) // Check valid syntaxe email
            throw new EmailException()
        if (!PasswordException.isValidPassword(mdp)) // Check valid syntaxe password
            throw new PasswordException()

        this.email = email;
        this.mdp = mdp;
        this.utilisateur_id_utilisateur = this.id;
    }

    get attributInsert(): Array < string > {
        return ['utilisateur_id_utilisateur', 'email', 'mdp']
    };

    static select(where: any) {
        return new Promise((resolve, reject) => {
            const join: Array < jointureInterface > = [{
                type: 'LEFT',
                table: 'utilisateur',
                where: {
                    table: 'tuteur',
                    foreignKey: 'utilisateur_idutilisateur'
                }
            },]
            MySQL.selectJoin('tuteur', join, where).then((arrayTuteur: Array < any > ) => {
                    let newUtilisateur: Utilisateur;
                    let data: Array < Tuteur > = [];
                    for (const utilisateur of arrayTuteur) {
                        utilisateur.dateNaiss = new String(utilisateur.dateNaiss)
                        utilisateur.id = utilisateur.idutilisateur;
                        newUtilisateur = new Utilisateur(utilisateur);
                        data.push(new Tuteur(newUtilisateur, utilisateur.email, utilisateur.mdp));
                    }
                    console.log(data);
                    resolve(data)
                })
                .catch((err: any) => {
                    console.log(err);
                    reject(false)
                });
        })
    }

    static isExiste(email: string) {
        return new Promise((resolve, reject) => {
            MySQL.select('tuteur', { email: email }).then((arrayTuteur: Array < any > ) => {
                    resolve((arrayTuteur.length > 0))
                })
                .catch((err: any) => {
                    console.log(err);
                    reject(false)
                });
        })
    }

}