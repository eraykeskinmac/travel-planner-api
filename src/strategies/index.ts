import passport from 'passport';
import { Strategy } from 'passport-local';
import { findUser } from './../services/user';
import { validatePassword } from './../utils/helpers/index';

passport.use(
  new Strategy(async (username, password, done) => {
    console.log('Inside Passport');
    console.log(username, password);
    try {
      const user = await findUser({ username });
      if (!user) return done(null, null);
      console.log(user);
      const validPassword = await validatePassword(password, user.password);
      if (!validPassword) throw new Error('Invalid Credentials');
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }),
);
