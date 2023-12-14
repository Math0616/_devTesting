document.addEventListener('DOMContentLoaded', function() {
	fetch('https://ordinalmaxibiz.vercel.app/api/theapegang') // Replace with your actual endpoint
		.then(response => response.json())
		.then(data => {
			const container = document.getElementById('token-container');
			data.forEach(group => {
				group.tokens.forEach(token => {
					const tokenElement = document.createElement('div');
					tokenElement.classList.add('token');

					// Add token details
					tokenElement.innerHTML = `
						<h3>Token ID: ${token.id}</h3>
						<p>Listed: ${token.listed ? 'Yes' : 'No'}</p>
						${token.listed ? `<p>Listed Price: ${token.listedPrice}</p>` : ''}
					`;

					container.appendChild(tokenElement);
				});
			});
		})
		.catch(error => {
			console.error('Error fetching token data:', error);
		});

	fetch('https://ordinalmaxibiz.vercel.app/api/ombcollection')
		.then(response => response.json())
		.then(data => {
			document.getElementById('floorPrice').textContent = data.floorPrice;
			document.getElementById('owners').textContent = data.owners;
			document.getElementById('totalListed').textContent = data.totalListed;
		})
		.catch(error => {
			console.error('Error fetching data:', error);
		});	
});	
	