const options = {method: 'GET', headers: {accept: 'application/json', 'Authorization': "Bearer ca4dcecc-5284-49e0-9c1d-0bbfb2001e7e"}};

fetch('https://api-mainnet.magiceden.dev/v2/ord/btc/tokens?collectionSymbol=omb&showAll=true&sortBy=priceAsc', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
