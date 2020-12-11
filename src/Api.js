export function fetchAPI(){
    const url = "Webb20-StockMarketTask1Webb20-StockMarketTaskAPIURLhttps://market-data-collector.firebaseio.com/market-collector.json"
    let apiData = null;
    fetch(url)
    .then(response => response.json())
    .then(data => apiData)
    return apiData;
}