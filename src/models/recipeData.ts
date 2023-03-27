export interface Ingredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: any;
  // measures: {
  //   us: {
  //     amount: number;
  //     unitShort: string;
  //     unitLong: string;
  //   };
  //   metric: {
  //     amount: number;
  //     unitShort: string;
  //     unitLong: string;
  //   };
  // };
}

export interface RecipeData {
  instructions: string | null;
  sourceUrl: string;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  extendedIngredients: Ingredient[];
}
