import { Router } from 'express';
import { Request, Response } from 'express';
import { AuthController } from '../controller/AuthController';
import { registerMidd, loginMidd, authMidd } from '../middlewares/utilisateur.middleware';

const route: Router = Router();

route.get('/', authMidd, (req: Request, res: Response) => {
    return res.sendFile(__dirname + '/index.html')
})
route.post('/login', loginMidd, AuthController.login)
route.post('/register', registerMidd, AuthController.register)
route.put('/subscription', authMidd, AuthController.authentification)

route.put('/user', authMidd, AuthController.modification)
route.delete('/user/off', authMidd, AuthController.déconnection)

route.post('/user/child', authMidd, AuthController.ajoutEnfant)
route.delete('/user/child', authMidd, AuthController.suppressionEnfant)
route.get('/user/child', authMidd, AuthController.listageEnfant)

route.delete('/user', authMidd, AuthController.suppressionCompte)


export { route as AuthentificationRoute }