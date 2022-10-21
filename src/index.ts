import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import 'reflect-metadata';
import { AppDataSource } from './database';
import routes from './routes';

async function main() {
  const app = express();
  const PORT = process.env.PORT || 3001;
  app.use('/api', routes);
  app.use(
    session({
      name: 'TRAVEL_APP_SESSION_ID',
      secret: 'asdokpwokdapikjdiawwjdwia',
      saveUninitialized: true,
      resave: false,
      cookie: {
        maxAge: 3600000 * 24,
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  try {
    await AppDataSource.initialize();
    app.listen(PORT, () => console.log(`Listening to requests on PORT ${PORT}`));
  } catch (error) {
    console.error(error);
  }
}
main();
