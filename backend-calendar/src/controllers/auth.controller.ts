import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const getAuth = (req: Request, res: Response) => {
  try {
    return res.json({ ok: true });
  } catch (error) {
    console.log(error);
  }
};

export const register = (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        ok: false,
        errors: errors.mapped(),
      });
    }

    return res.status(201).json({ ok: true, msg: 'registro', name, email, password });
  } catch (error) {
    console.log(error);
  }
};

export const login = (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        ok: false,
        errors: errors.mapped(),
      });
    }

    return res.json({ ok: true, msg: 'login', email, password });
  } catch (error) {
    console.log(error);
  }
};
export const renew = (req: Request, res: Response) => {
  try {
    return res.json({ ok: true, msg: 'renew' });
  } catch (error) {
    console.log(error);
  }
};
