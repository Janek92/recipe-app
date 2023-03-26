import african from "../assets/cuisines/african_640.jpg";
import american from "../assets/cuisines/american_640.jpg";
import british from "../assets/cuisines/british_640.jpg";
import cajun from "../assets/cuisines/cajun_640.jpg";
import carribean from "../assets/cuisines/carribean_640.jpg";
import chinese from "../assets/cuisines/chinese_640.jpg";
import easternEuropean from "../assets/cuisines/eastern_european_640.jpg";
import european from "../assets/cuisines/european_640.jpg";
import french from "../assets/cuisines/french_640.jpg";
import german from "../assets/cuisines/german_640.jpg";
import indian from "../assets/cuisines/indian_640.jpg";
import irish from "../assets/cuisines/irish_640.jpg";
import italian from "../assets/cuisines/italian_640.jpg";
import japanese from "../assets/cuisines/japanese_640.jpg";
import jewish from "../assets/cuisines/jewish_640.jpg";
import korean from "../assets/cuisines/korean_640.jpg";
import latinAmerian from "../assets/cuisines/latin_amerian_640.jpg";
import mediterranean from "../assets/cuisines/mediterranean_640.jpg";
import mexican from "../assets/cuisines/mexican_640.jpg";
import middleEastern from "../assets/cuisines/middle_eastern_640.jpg";
import nordic from "../assets/cuisines/nordic_640.jpg";
import southern from "../assets/cuisines/southern_640.jpg";
import spanish from "../assets/cuisines/spanish_640.jpg";
import thai from "../assets/cuisines/thai_640.jpg";
import vietnamese from "../assets/cuisines/vietnamese_640.jpg";

import glutenFree from "../assets/diets/gluten_free_640.jpg";
import ketogenic from "../assets/diets/ketogenic_640.jpg";
import lactoVegetarian from "../assets/diets/lacto_vegetarian_640.jpg";
import lowFodmap from "../assets/diets/low_fodmap_640.jpg";
import ovoVegetarian from "../assets/diets/ovo_vegetarian_640.jpg";
import paleo from "../assets/diets/paleo_640.jpg";
import pascetarian from "../assets/diets/pescetarian_640.jpg";
import primal from "../assets/diets/primal_640.jpg";
import vegan from "../assets/diets/vegan_640.jpg";
import vegetarian from "../assets/diets/vegetarian_640.jpg";
import whole30 from "../assets/diets/whole_30__640.jpg";

import {
  GiChickenOven,
  GiCookingPot,
  GiCupcake,
  GiSushis,
  GiMartini,
} from "react-icons/gi";
import { MdFreeBreakfast, MdFastfood } from "react-icons/md";
import { CiGlass } from "react-icons/ci";

export const cuisineList = [
  { img: african, title: "african", type: "cuisine" },
  { img: american, title: "american", type: "cuisine" },
  { img: british, title: "british", type: "cuisine" },
  { img: cajun, title: "cajun", type: "cuisine" },
  { img: carribean, title: "carribean", type: "cuisine" },
  { img: chinese, title: "chinese", type: "cuisine" },
  { img: easternEuropean, title: "eastern european", type: "cuisine" },
  { img: european, title: "european", type: "cuisine" },
  { img: french, title: "french", type: "cuisine" },
  { img: german, title: "german", type: "cuisine" },
  { img: indian, title: "indian", type: "cuisine" },
  { img: irish, title: "irish", type: "cuisine" },
  { img: italian, title: "italian", type: "cuisine" },
  { img: japanese, title: "japanese", type: "cuisine" },
  { img: jewish, title: "jewish", type: "cuisine" },
  { img: korean, title: "korean", type: "cuisine" },
  { img: latinAmerian, title: "latin amerian", type: "cuisine" },
  { img: mediterranean, title: "mediterranean", type: "cuisine" },
  { img: mexican, title: "mexican", type: "cuisine" },
  { img: middleEastern, title: "middle eastern", type: "cuisine" },
  { img: nordic, title: "nordic", type: "cuisine" },
  { img: southern, title: "southern", type: "cuisine" },
  { img: spanish, title: "spanish", type: "cuisine" },
  { img: thai, title: "thai", type: "cuisine" },
  { img: vietnamese, title: "vietnamese", type: "cuisine" },
];

export const dietList = [
  { img: glutenFree, title: "gluten free", type: "diet" },
  { img: ketogenic, title: "ketogenic", type: "diet" },
  { img: lactoVegetarian, title: "lacto vegetarian", type: "diet" },
  { img: lowFodmap, title: "low fodmap", type: "diet" },
  { img: ovoVegetarian, title: "ovo vegetarian", type: "diet" },
  { img: paleo, title: "paleo", type: "diet" },
  { img: pascetarian, title: "pascetarian", type: "diet" },
  { img: primal, title: "primal", type: "diet" },
  { img: vegan, title: "vegan", type: "diet" },
  { img: vegetarian, title: "vegetarian", type: "diet" },
  { img: whole30, title: "whole 30", type: "diet" },
];

export const dailyMealList = [
  { img: MdFreeBreakfast, title: "breakfast", type: "type" },
  { img: GiSushis, title: "appetizer", type: "type" },
  { img: GiChickenOven, title: "main course", type: "type" },
  { img: GiCookingPot, title: "soup", type: "type" },
  { img: GiCupcake, title: "dessert", type: "type" },
  { img: MdFastfood, title: "snack", type: "type" },
  { img: CiGlass, title: "drink", type: "type" },
  // { img: GiOpenedFoodCan, title: "side dish", type: "daily meal" },
  // { img: TbSalad, title: "salad", type: "daily meal" },
  // { img: TbBread, title: "bread", type: "daily meal" },

  // { img: , title: "beverage", type: "daily meal" }
  // { img: , title: "sauce", type: "daily meal" }
  // { img: , title: "marinade", type: "daily meal" }
  // { img: , title: "fingerfood", type: "daily meal" }
];
