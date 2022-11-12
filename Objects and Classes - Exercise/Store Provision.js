function storeProvision(firstArr, secondArr) {
  let currentStockArr = firstArr;
  let deliveryStocksArr = secondArr;

  let currentStocks = {};

  let currStocsL = currentStockArr.length;
  let deliveryStocksL = deliveryStocksArr.length;

  for (let i = 0; i < currStocsL; i += 2) {
    let product = currentStockArr[i];
    currentStocks[product] = Number(currentStockArr[i + 1]);
  }
  for (let i = 0; i < deliveryStocksL; i+=2) {
    let product = deliveryStocksArr[i];
    if (!currentStocks.hasOwnProperty(product)) {
      currentStocks[product] = 0;
    }
    currentStocks[product] += Number(deliveryStocksArr[i + 1]);
  }
  for (product in currentStocks) {
    console.log(`${product} -> ${currentStocks[product]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
