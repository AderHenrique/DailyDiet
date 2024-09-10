import AsyncStorage from "@react-native-async-storage/async-storage";
import MealStorageDTO from "./MealStorageDTO";
import getMealsStored from "./getMealsStored";
import { MEAL_COLLECTION } from "@storage/storageConfig";

async function mealCreate(newMeal: Omit<MealStorageDTO, 'id'>) {
  try {
    const storedMeals = await getMealsStored();

    const newId = storedMeals.length > 0
      ? Math.max(...storedMeals.map(meal => parseInt(meal.id))) + 1 // Gera o próximo ID
      : 1;

    const mealWithId: MealStorageDTO = {
      ...newMeal,
      id: newId.toString(), // Converte o ID para string
    };

    const storage = JSON.stringify([...storedMeals, mealWithId]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
}

export default mealCreate;
