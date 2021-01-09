import { Router } from 'express';
import { Request, Response } from 'express';
import { AuthController } from '../controller/AuthController';
import { registerMidd, loginMidd, authMidd } from '../middlewares/auth.middleware';

const route: Router = Router();

route.put('/user/cart', registerMidd, AuthController.register)

export { route as AuthentificationRoute }