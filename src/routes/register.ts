import { Router } from 'express';
import { registerUserController } from '../controllers/register';
import { validateRegisterUser } from './../middlewares/register/validators';

const router = Router();

router.post('/', validateRegisterUser, registerUserController);

export default router;
