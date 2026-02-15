import { UserStats, UserProfile } from '@/src/types/user';

export const calculateMuscleGainLogic = (stats: UserStats, tdee: number): UserProfile => {
  // Moderate surplus (10%)
  const calories = Math.round(tdee * 1.10);

  // Proteins
  const proteinGrams = Math.round(stats.weight * 1.8);
  const proteinCalories = proteinGrams * 4;

  // Fats
  const fatGrams = Math.round(stats.weight * 1.0);
  const fatCalories = fatGrams * 9;

  // Carbohydrates
  const remainingCalories = calories - proteinCalories - fatCalories;
  const carbGrams = Math.round(remainingCalories / 4);

  return {
    ...stats,
    dailyCalories: calories,
    macros: { protein: proteinGrams, carbs: carbGrams, fats: fatGrams },
  };
};