
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import { verifyAdmin } from './db';

export const authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.isAuthenticated) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};

export const login = async (username: string, password: string) => {
  const admin = verifyAdmin.get(username);
  if (!admin || !bcrypt.compareSync(password, admin.password)) {
    return false;
  }
  return true;
};
