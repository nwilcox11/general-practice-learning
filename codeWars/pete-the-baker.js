'use strict';

// Pete likes to bake some cakes. He has some recipes and ingredients.
// Unfortunately he is not good in maths.
// Can you help him to find out, how many cakes he could bake considering his recipes?
//
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object)
// and returns the maximum number of cakes Pete can bake (integer).
// For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
// Ingredients that are not present in the objects, can be considered as 0.


// First I took all the ingredients in the recipe by grabing the keys from the recipe object.
// Then I looped through the keys checking to see if they were in the available object, then dividing
// by the recipe.
// We can then reduce the keys array to find which ingredient would run out first, and return that number.

const recipe = {flour: 500, sugar: 200, eggs: 1};
const available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

const cakes = (recipe, available) => {
  let keys = Object.keys(recipe);

  return keys.map((k) => Math.floor((available[k] ? available[k] : 0) / recipe[k]))
             .reduce((prev, curr) => prev < curr ? prev : curr);
};

console.log(cakes(recipe, available));
