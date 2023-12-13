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
