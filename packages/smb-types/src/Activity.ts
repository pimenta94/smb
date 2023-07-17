export enum ActivityType {
  trainingSession = 'trainingSession',
  NutritionSession = 'nutritionSession',
}

export interface Activity {
  type?: string;
  clientName: string;
  appointment: {
    startingDate: Date;
    duration?: number;
  };
}
