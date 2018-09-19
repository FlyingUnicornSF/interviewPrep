/**
 * Q1:
 * the best profit I could have made from one purchase 
 * and one sale of one share of Apple stock yesterday.
 * Q2: if it was as many times you want  
 * const stockPrices = [10, 7, 5, 8, 11, 9];
 */
/**
 * @param {number[]} input
 * @return {number}
 */

appleStockQ2 = (input)=>{
  // assuming you don't HAVE to sell if stock keeps going down
  let output = 0;
  let prev;
  for( let i = 0; i < input.length; i++ ) {
    if(prev === undefined){
      prev = input[i];
    } else {
      if( prev < input[i] ){
        output = output + input[i] - prev;
      }
    }
    prev = input[i];
  }
  return output;
}

appleStockQ1 = (stockPrices)=>{
  // assuming you HAVE to sell at least once
  if (stockPrices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  // greedily update minPrice and maxProfit, initialize
  // them to the first price and the first possible profit
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  // Start at the second (index 1) time

  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];

    // See what our profit would be if we bought at the
    // min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;

    // Update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);

    // Update minPrice so it's always
    // the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

let array = [3, 10, 7, 5, 8, 11, 9];
console.log(appleStockQ2(array));
console.log(appleStockQ1(array));
