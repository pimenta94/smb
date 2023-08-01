import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

/* eslint-disable import/first */
import app from './app';
import mongoConfig from './mongo-config';

const port = process.env.PORT ?? 3000;

mongoose
  .connect(mongoConfig.MONGO_URI)
  .then((con) => {
    console.log(`🟢 Mongo db connected:`, con.connection.name);

    app.listen(port, () => {
      /* eslint-disable no-console */
      console.log(`Listening: http://localhost:${port}`);
    });
  })
  .catch((err): void => {
    console.log(err);
  });
