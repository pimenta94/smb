import mongoose from 'mongoose';
import { ActivityType } from 'smb-types';

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  type: { type: String, default: ActivityType.trainingSession },
  clientName: { type: String, required: true },
  appointment: {
    startingDate: { type: Date, required: true },
    duration: { type: Number, default: 1 },
  },
});

const ActivityModel = mongoose.model('Activity', activitySchema);

export default ActivityModel;
