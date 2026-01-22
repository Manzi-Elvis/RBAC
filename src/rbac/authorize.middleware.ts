import type { Request, Response, NextFunction } from "express";
import { Permission } from "./permissions.js";
import { RolePolicies } from "./policy.js";

declare global {
  namespace Express {
    interface Request {
      user?: { role: string };
    }
  }
}

export function authorize(requiredPermission: Permission) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const permissions = RolePolicies[user.role as keyof typeof RolePolicies] || [];

    if (!permissions.includes(requiredPermission)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
}
