import express from 'express';

import ActivityModel from '../models/activityModel';

const router = express.Router();

router.get('/', (req, res) => {
  const testActivity = new ActivityModel({
    clientName: 'Joao',
    appointment: {
      startingDate: new Date(),
    },
  });

  testActivity
    .save()
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.log(err);
    });

  res.json('Activities');
});

export default router;
