import { Router } from 'express';
import { getAuth, login, register, renew } from '../controllers/auth.controller';
import { check } from 'express-validator';
const router = Router();

// /api/auth

router.get('/', getAuth);
router.get('/renew', renew);
router.post(
  '/new',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
  ],
  register
);
router.post(
  '/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
  ],
  login
);

export default router;
