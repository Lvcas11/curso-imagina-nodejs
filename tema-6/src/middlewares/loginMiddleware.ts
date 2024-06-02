import { Request, Response, NextFunction } from "express";

const loginMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("req", req.method, req.path);
  if (req.method === "GET" && req.path === "/api/usuarios/") {
    res.redirect("/api/usuarios-texto/");
  } else {
    next();
  }
};

export default loginMiddleware;
