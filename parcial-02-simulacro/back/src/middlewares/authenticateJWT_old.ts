import express from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const authMiddleware: express.RequestHandler = (req, res, next) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    console.log("No token found");
    return res
      .status(401)
      .json({ message: "Authentication failed, missing token" });
  }

  if (secretKey) {
    try {
      const decoded: JwtPayload = jwt.verify(token, secretKey) as JwtPayload;
      console.log("Token verification successful");
      next();
    } catch (err) {
      console.error("Token verification failed:", err);
      return res
        .status(401)
        .json({ message: "Authentication failed, invalid token" });
    }
  } else {
    console.error("JWT_SECRET_KEY not defined in environment");
    return res
      .status(500)
      .json({ message: "Internal server error" });
  }
};

export default authMiddleware;
