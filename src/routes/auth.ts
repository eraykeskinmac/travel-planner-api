import { Router } from 'express';
import passport from 'passport';
import { authLoginController, authStatusController } from './../controllers/auth';

const router = Router();

router.post('/login', passport.authenticate('local'), authLoginController);
router.post('/status', authStatusController);

export default router;
