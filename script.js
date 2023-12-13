fetch('https://ordinal-maxi-biz-vercel-project.vercel.app/api/ombcollection')
	.then(response => response.json())
	.then(data => {
		document.getElementById('floorPrice').textContent = data.floorPrice;
		document.getElementById('owners').textContent = data.owners;
		document.getElementById('totalListed').textContent = data.totalListed;
	})
	.catch(error => {
		console.error('Error fetching data:', error);
	});

fetch('https://ordinal-maxi-biz-vercel-project.vercel.app/api/theapegang')
	.then(response => response.json())
	.then(tokens => {
		tokens.forEach(token => {
		console.log(`Token ID: ${token.id}`);
		if (token.listed) {
			console.log(`Listed: Yes`);
			console.log(`Listed Price: ${token.listedPrice}`);
		} else {
			console.log(`Listed: No`);
		}
		});
	})
	.catch(error => {
		console.error('Error fetching token data:', error);
	});
