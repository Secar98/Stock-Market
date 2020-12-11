export function fetchAPI(){
    const url = "https://market-data-collector.firebaseio.com/market-collector.json"
    let apiData = null;
    fetch(url)
    .then(response => response.json())
    .then(data => apiData)
    return apiData;
}