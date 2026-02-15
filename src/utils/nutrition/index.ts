import { UserStats, UserProfile } from '@/src/types/user';
import { calculateLoseWeightLogic } from '@/src/utils/nutrition/calculateLoseWeight';
import { calculateMuscleGainLogic } from '@/src/utils/nutrition/calculateMuscleGain';
import { calculateHealthyEatingLogic } from '@/src/utils/nutrition/calculateHealthyEating'; 

export const finalizeNutritionProfile = (stats: UserStats): UserProfile => {
  // Formula Mifflin-St Jeor per il metabolismo basale
  const baseBmr = 10 * stats.weight + 6.25 * stats.height - 5 * stats.age;
  const bmr = stats.gender === 'MALE' ? baseBmr + 5 : baseBmr - 161;
  const tdee = Math.round(bmr * stats.activityLevel);

  switch (stats.goal) {
    case 'LOSE_WEIGHT':
      return calculateLoseWeightLogic(stats, tdee);
    case 'GAIN_MUSCLE':
      return calculateMuscleGainLogic(stats, tdee);
    case 'MAINTAIN':
    default:
      return calculateHealthyEatingLogic(stats, tdee);
  }
};
