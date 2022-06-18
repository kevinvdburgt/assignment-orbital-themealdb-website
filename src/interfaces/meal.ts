import { Ingredient } from './ingredient';

export interface Meal {
  id: string;
  name: string;
  area: string;
  image: string | null;
  link: string;
  ingredients: Ingredient[];
  instructions: string[];
}
