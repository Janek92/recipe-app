interface MissedAndUnused {
  aisle: string;
  amount: number;
  id: number;
  image: string;
  meta: string[] | [];
  name: string;
  original: string;
  originalName: string;
  unit: string;
  unitLong: string;
  unitShort: string;
}
interface UsedIngredients {
  aisle: string;
  amount: number;
  extendedName: string;
  id: number;
  image: string;
  meta: string[] | [];
  name: string;
  original: string;
  originalName: string;
  unit: string;
  unitLong: string;
  unitShort: string;
}

export interface IngredientsData {
  id: number;
  image: string;
  imageType: string;
  likes: number;
  missedIngredientCount: number;
  missedIngredients: MissedAndUnused[] | [];
  title: string;
  unusedIngredients: MissedAndUnused[] | [];
  usedIngredientCount: number;
  usedIngredients: UsedIngredients[] | [];
}
