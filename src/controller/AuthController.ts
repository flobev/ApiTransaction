import { decode, sign } from 'jsonwebtoken';
import { Request, Response } from 'express';

import Enfant from '../models/Enfant';
import Tuteur from '../models/Tuteur';
import Utilisateur from '../models/Utilisateur';
import PasswordException from '../exception/PasswordException';

export class AuthController {

    static login = async(req: Request, res: Response) => {

        let data: any = req.body;

        try {
            let tuteur: any = await Tuteur.select({ email: data.email });
            if (tuteur.length < 0)
                throw new Error(`Email don't exist!`)
                tuteur = tuteur[0];

            const isOk = await PasswordException.comparePassword(data.password, tuteur.password);

            if (!isOk)
                throw new Error(`User is undefined!`)

            const theToken: any = await sign({ id: tuteur.personne_idpersonne, name: tuteur.fullname }, < string > process.env.JWT_KEY, { expiresIn: '1m' })

            const token = {
                token: theToken,
                expired: await ( < any > decode(theToken)).exp
            }
            return res.status(201).json(token);
        } catch (err) {
            return res.status(401).json({ error: true, message: err.message }).end();
        }
    }

    /**
     *
     *
     * @static
     * @memberof AuthController
     */
    static register = async(req: Request, res: Response) => {
        let data: any = req.body;

        try {
            if (await Tuteur.isExiste(data.email))
                throw new Error(`Email exist!`)

            const utilisateur = new Utilisateur(null, data.prenom, data.nom, data.dateNaiss, data.pays, data.adresse, data.ville, data.zipcode);
            await utilisateur.save();
            const pass = await PasswordException.hashPassword(data.password);
            const tuteur = new Tuteur(utilisateur, data.email, pass);
            await tuteur.save();

            const theToken: any = await sign({ id: tuteur.utilisateur, name: tuteur.fullname }, < string > process.env.JWT_KEY, { expiresIn: '1m' })

            const token = {
                token: theToken,
                expired: await ( < any > decode(theToken)).exp
            }
            return res.status(201).json(token);

        } catch (err) {
            return res.status(401).json({ error: true, message: err.message }).end();
        }
    }

    refreshToken = async(req: Request, res: Response) => {}
    checkToken = async(req: Request, res: Response) => {}
    logout = async(req: Request, res: Response) => {}

}