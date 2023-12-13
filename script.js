fetch('https://ordinalmaxibiz-backend-3mu98tvkd-math0616s-projects.vercel.app/api/omb')
  .then(response => response.json())
  .then(data => {
    const floorPrice = data.floorPrice;
    const owners = data.owners;
    const totalListed = data.totalListed;

    // Do something with these values in your frontend
    console.log(`Floor Price: ${floorPrice}, Owners: ${owners}, Total Listed: ${totalListed}`);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
