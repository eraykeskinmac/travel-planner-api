import passport from "passport";
import { Strategy } from "passport-local";

passport.use(
  new Strategy((username, password) => {
    console.log("Inside Passport Local Strategy");
    
    console.log(username, password);
  })
);
