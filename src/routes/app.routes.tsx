import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { NewMeal } from "@screens/NewMeal";
import { MealInfo } from "@screens/MealInfo";
import { Statistics } from "@screens/Statistics";
import { MealInfoEdit } from "@screens/MealInfoEdit";
import { BadMealScreen } from "@screens/BadMealScreen";
import { GoodMealScreen } from "@screens/GoodMealScreen";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="home"
        component={Home}
      />
      <Screen
      name="mealInfo"
      component={MealInfo}
      />
      <Screen 
        name="statistics"
        component={Statistics}
      />
      <Screen 
        name="newMeal"
        component={NewMeal}
      />
      <Screen
      name="mealInfoEdit"
      component={MealInfoEdit}
      />
      <Screen
      name="badMealScreen"
      component={BadMealScreen}
      />
      <Screen
      name="goodMealScreen"
      component={GoodMealScreen}
      />
    </Navigator>
  );
}
