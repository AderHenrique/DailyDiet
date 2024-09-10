type MealStorageDTO = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  isInDiet: 'yes' | 'no';
};

export default MealStorageDTO