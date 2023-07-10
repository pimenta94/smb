import express from 'express';

import emojis from './emojis';

import type MessageResponse from '../interfaces/MessageResponse';

const router = express.Router();

router.get<MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);

export default router;
