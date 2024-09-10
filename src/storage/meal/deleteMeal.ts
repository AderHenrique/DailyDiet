import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import getMealsStored from './getMealsStored';
async function deleteMeal(id: string): Promise<void> {
  try {
    const meals = await getMealsStored();
    const updatedMeals = meals.filter(meal => meal.id !== id);
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error) {
    console.error("Erro ao excluir a refeição: ", error);
    throw error;
  }
}

export default deleteMeal;