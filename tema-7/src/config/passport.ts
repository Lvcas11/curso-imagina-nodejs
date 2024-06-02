import passport from "passport";
import { Strategy as OAuth2Strategy } from "passport-oauth2";
import express from "express";

passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: "https://provider.com/oauth2/authorize",
      tokenURL: "https://provider.com/oauth2/token",
      clientID: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
      callbackURL: "http://localhost:3000/auth/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Aquí puedes manejar el perfil del usuario y guardar los datos necesarios en la sesión o la base de datos
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
