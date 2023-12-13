fetch('https://ordinalmaxibiz-backend-mya6juq3s-math0616s-projects.vercel.app/api/omb')
	.then(response => response.json())
	.then(data => {
		document.getElementById('floorPrice').textContent = data.floorPrice;
		document.getElementById('owners').textContent = data.owners;
		document.getElementById('totalListed').textContent = data.totalListed;
	})
	.catch(error => {
		console.error('Error fetching data:', error);
	});
