import { Meal } from '../interfaces/meal';
import { FetchRandomMealInvalidPayloadException } from './exceptions/fetch-random-meal-invalid-payload.exception';
import { FetchRandomMealException } from './exceptions/fetch-random-meal.exception';

export const fetchRandomMeal = async (): Promise<Meal> => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');

  if (response.status !== 200) {
    throw new FetchRandomMealException(response.status);
  }

  const json = await response.json();

  // The payload should by an object with an array of meals with only a single meal
  if (typeof json !== 'object' || !json.meals || !Array.isArray(json.meals) || json.meals.length !== 1) {
    throw new FetchRandomMealInvalidPayloadException();
  }

  const rawMeal = json.meals[0];

  return {
    id: rawMeal.idMeal || '',
    name: rawMeal.strMeal || 'unknown',
    area: rawMeal.strArea || 'unknown',
    image: rawMeal.strMealThumb || null,
    link: rawMeal.strSource || null,
    ingredients: Array.from({ length: 19 })
      .map((_, index) => ({
        name: rawMeal[`strIngredient${index + 1}`],
        measure: rawMeal[`strMeasure${index + 1}`],
      }))
      .filter((ingredient) => ingredient.name.length > 0),
    instructions: typeof rawMeal.strInstructions === 'string' ? rawMeal.strInstructions.split('\r\n') : [],
  };
};
