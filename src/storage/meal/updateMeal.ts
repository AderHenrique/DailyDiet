import AsyncStorage from "@react-native-async-storage/async-storage";

import getMealsStored from "./getMealsStored";
import MealStorageDTO from "./MealStorageDTO";

import { MEAL_COLLECTION } from "@storage/storageConfig";

export default async function updateMeal(updatedMeal: MealStorageDTO) {
  try {
    const meals = await getMealsStored();
    const updatedMeals = meals.map(meal =>
      meal.id === updatedMeal.id ? updatedMeal : meal
    );

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error) {
    throw new Error('Erro ao atualizar a refeição');
  }
}