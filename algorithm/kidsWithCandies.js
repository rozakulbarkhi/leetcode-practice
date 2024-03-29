/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const kidsWhoHaveMostCandy = Math.max(...candies);
  const arr = [];

  for (let i = 0; i < candies.length; i++) {
    result = candies[i] + extraCandies >= kidsWhoHaveMostCandy;
    arr.push(result);
  }

  return arr;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
