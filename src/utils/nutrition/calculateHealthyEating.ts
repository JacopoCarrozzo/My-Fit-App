import { UserStats, UserProfile } from '@/src/types/user';

export const calculateHealthyEatingLogic = (stats: UserStats, tdee: number): UserProfile => {
  
  const calories = tdee;

  // Proteins
  const proteinGrams = Math.round(stats.weight * 1.6);
  const proteinCalories = proteinGrams * 4;

  // Fats
  const fatGrams = Math.round(stats.weight * 0.9);
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