import express from 'express';
import morgan from 'morgan';
// import helmet from 'helmet';
// import cors from 'cors';

import * as middlewares from './middlewares';
import api from './api';

import type MessageResponse from './interfaces/MessageResponse';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// app.use(helmet());
// app.use(cors());
app.use(express.json());

app.get<MessageResponse>('/', (req, res) => {
  res.json({
    message: 'My Node-Express API is runnig!!',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
