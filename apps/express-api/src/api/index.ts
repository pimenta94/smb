import express from 'express';

import emojis from './emojis';
import activities from './activities';

import type MessageResponse from '../interfaces/MessageResponse';

const router = express.Router();

router.get<MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/activities', activities);

export default router;
