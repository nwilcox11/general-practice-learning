'use strict';

// Pete is now mixing the cake mixture. He has the recipe, containing the required ingredients for one cake.
// He also might have added some of the ingredients already, but something is missing.
// Can you help him to find out, what he has to add to the mixture?

// Requirements:

// Pete only wants to bake whole cakes. And ingredients, that were added once to the mixture, can't be removed from that.
// That means: if he already added the amount of flour for 2.8 cakes, he needs to add at least the amount of flour for 0.2 cakes, in order to have enough flour for 3 cakes.
// If Pete already added all ingredients for an integer amount of cakes, you don't need to add anything, just return an empty hash then.
// If Pete didn't add any ingredients at all, you need to add all ingredients for exactly one cake.
// For simplicity we ignore all units and just concentrate on the numbers. E.g. 250g of flour is simply 250 (units) of flour and 1 lb of sugar is also simply 1 (unit) of sugar.
// Ingredients, which don't have to be added to the mixture (missing amount = 0), must not be present in the result.

// First I looped through all the keys in the recipe to figure out how many cakes.
// I got the number of cakes by checking if there was going to be more than one cake (added[item] > recipe[item]),
  // and then setting cakeNum = to result of added[item] / recipe[item].

// Next I looped through the keys again, checking if the added[item] is < the recipe[item] * number of cakes
// I then built the return object by multiplying the recipe[item] * number of cakes - added[item].

//http://www.codewars.com/kata/5267e5827526ea15d8000708

const recipe = {flour: 200, eggs: 1, sugar: 100};
const added = {flour: 50, eggs: 1};

const getMissingIngredients = (recipe, added) => {

  let keys = Object.keys(recipe),   // array of recipe keys [flour, eggs, sugar];
      add = {},
      cakeNum = 1;

  keys.forEach((item) => {
    if(added[item] > recipe[item] * cakeNum) {
      cakeNum = Math.ceil(added[item] / recipe[item]);
    }
  });

  keys.forEach((item) => {
    if(!added[item]) {
      added[item] = 0;
    }

    if(added[item] < recipe[item] * cakeNum) {
        add[item] = recipe[item] * cakeNum  - added[item];
      }
  });

  return add;
};

console.log(getMissingIngredients(recipe, added));
