document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ordinalmaxibiz.vercel.app/api/theapegang') // Replace with your actual endpoint
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('token-container');
            data.forEach(group => {
                group.tokens.forEach(token => {
                    const tokenElement = document.createElement('div');
                    tokenElement.classList.add('token');

                    let priceInfo = '';
                    if (token.listed) {
                        // Convert listedPrice to decimal and remove unnecessary trailing zeros
                        const formattedPrice = (token.listedPrice / 100000000).toString();
                        priceInfo = `<p>Listed Price: ₿${formattedPrice}</p>`;
                    }

                    // Add token details
                    tokenElement.innerHTML = `
                        <h3>Token ID: ${token.id}</h3>
                        <p>Listed: ${token.listed ? 'Yes' : 'No'}</p>
                        ${priceInfo}
                    `;

                    container.appendChild(tokenElement);
                });
            });
        })
        .catch(error => {
            console.error('Error fetching token data:', error);
        });
});

fetch('https://ordinalmaxibiz.vercel.app/api/ombcollection')
	.then(response => {
		console.log('Response received:', response);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return response.json();
	})
	.then(data => {
		console.log('Data received:', data);
		document.getElementById('floorPrice').textContent = data.floorPrice;
		document.getElementById('owners').textContent = data.owners;
		document.getElementById('totalListed').textContent = data.totalListed;
	})
	.catch(error => {
		console.error('Error fetching data:', error);
	});
