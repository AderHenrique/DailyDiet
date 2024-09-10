import AsyncStorage from "@react-native-async-storage/async-storage";

import MealStorageDTO from "./MealStorageDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";

async function getMealsStored() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];
    return meals;
  } catch (error) {
    console.error("Erro ao recuperar dados:", error); 
    throw error;
  }
}

export default getMealsStored;