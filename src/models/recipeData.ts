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
  measures: {
    us: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
    metric: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
  };
}

// interface ProductMatches {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   averageRating: number;
//   ratingCount: number;
//   score: number;
//   link: string;
// }

// interface StepIngredientid {
//   id: number;
//   name: string;
//   localizedName: string;
//   image: string;
// }

// interface Step {
//   number: number;
//   step: string;
//   ingredients: StepIngredientid[];
//   equipment: [];
//   length: {
//     number: number;
//     unit: string;
//   };
// }

// export interface RecipeData {
//   vegetarian: boolean;
//   vegan: boolean;
//   glutenFree: boolean;
//   dairyFree: boolean;
//   veryHealthy: boolean;
//   cheap: boolean;
//   veryPopular: boolean;
//   sustainable: boolean;
//   lowFodmap: boolean;
//   weightWatcherSmartPoints: number;
//   gaps: string;
//   preparationMinutes: number;
//   cookingMinutes: number;
//   aggregateLikes: number;
//   healthScore: number;
//   creditsText: string;
//   sourceName: string;
//   pricePerServing: number;
//   extendedIngredients: Ingredient[];
//   id: number;
//   title: string;
//   readyInMinutes: number;
//   servings: number;
//   sourceUrl: string;
//   image: string;
//   imageType: string;
//   summary: string;
//   cuisines: string[] | [];
//   dishTypes: string[] | [];
//   diets: string[] | [];
//   occasions: string[] | [];
//   winePairing: {
//     pairedWines: string[] | [];
//     pairingText: string;
//     productMatches: ProductMatches[];
//   };
//   instructions: string | null;
//   analyzedInstructions: { name: string; steps: Step[] };
//   originalId: null;
//   spoonacularSourceUrl: string;
// }
