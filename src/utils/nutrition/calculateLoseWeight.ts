import { UserStats, UserProfile } from '@/src/types/user';

export const calculateLoseWeightLogic = (stats: UserStats, tdee: number): UserProfile => {
  // 1. Calorie calculation with a 20% deficit
  const calories = Math.round(tdee * 0.80);

  // Proteins
  const proteinGrams = Math.round(stats.weight * 2.0);
  const proteinCalories = proteinGrams * 4;

  // Fats
  const fatGrams = Math.round(stats.weight * 0.8);
  const fatCalories = fatGrams * 9;

  // Carbohydrates
  const remainingCalories = calories - proteinCalories - fatCalories;
  const carbGrams = Math.round(remainingCalories / 4);

  return {
    ...stats,
    dailyCalories: calories,
    macros: {
      proteins: proteinGrams,
      carbs: carbGrams,
      fats: fatGrams,
    },
  };
};