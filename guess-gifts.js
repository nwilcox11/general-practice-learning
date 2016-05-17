'use strict';
/*
  You will be given a wishlist (array), containing all possible items.
  Each item is in the format: {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"}
  You also get a list of presents (array), you see under the christmas tree,
  which have the following format each: {size: "small", clatters: "no", weight: "light"}
  Your task is to create a list of all possible presents you might get.
  Rules

  Possible values for size: "small", "medium", "large"
  Possible values for clatters: "no", "a bit", "yes"
  Possible values for weight: "light", "medium", "heavy"
  The return value must be an array of the names of items from your wishlist, e.g. ["Toy Car", "Card Game"]
  Don't add any item more than once to the result
  The order of names in the returned array doesn't matter
  It's possible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, add all of them.
*/

// http://www.codewars.com/kata/52ae6b6623b443d9090002c8/train/javascript

let wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

let presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

function guessGifts(wishlist, presents) {
  let result = [];

  wishlist.map((item) => {
    presents.map((pres) => {
      if(item.clatters === pres.clatters && item.weight === pres.weight && item.size === pres.size) {
        return result.indexOf(item.name) === -1 ? result.push(item.name) : result;
      }
    });
  });
  return result;
}

guessGifts(wishlist, presents);
