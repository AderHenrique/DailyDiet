import getMealsStored from "./getMealsStored";

export async function calculateStats() {
  const storedMeals = await getMealsStored();

  const totalMeals = storedMeals.length;
  const mealsInDiet = storedMeals.filter(meal => meal.isInDiet === 'yes').length;
  const mealsOutOfDiet = storedMeals.filter(meal => meal.isInDiet === 'no').length;

  const percent = totalMeals > 0 ? (( mealsInDiet / totalMeals ) * 100).toFixed(2) : '0.00';

  let bestMealPlan = 0;
  let currentSequence = 0;

  storedMeals.forEach((meal) => {
    if (meal.isInDiet === 'yes') {
      currentSequence += 1;
      if (currentSequence > bestMealPlan) {
        bestMealPlan = currentSequence;
      }
    } else {
      currentSequence = 0;
    }
  });

  return {
    percent,
    bestMealPlan,
    totalMeals,
    mealsInDiet,
    mealsOutOfDiet,
  }
}