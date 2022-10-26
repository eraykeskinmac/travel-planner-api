import { TypeormStore } from 'connect-typeorm';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import 'reflect-metadata';
import { AppDataSource } from './database';
import { SessionRepository } from './database/repositories';
import routes from './routes';

async function main() {
  const app = express();
  const PORT = process.env.PORT || 3001;
  app.use(express.json());
  app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));
  app.use(
    session({
      name: 'TRAVEL_APP_SESSION_ID',
      secret: 'asdokpwokdapikjdiawwjdwia',
      saveUninitialized: true,
      resave: false,
      cookie: {
        maxAge: 3600000 * 24,
      },
      store: new TypeormStore().connect(SessionRepository),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use('/api', routes);

  try {
    await AppDataSource.initialize();
    app.listen(PORT, () => console.log(`Listening to requests on PORT ${PORT}`));
  } catch (error) {
    console.error(error);
  }
}
main();
