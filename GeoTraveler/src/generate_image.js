var api_key = 'insert-key'
var signature = 4

function fetchStreetView(coord, size, fov, heading, pitch=0) {
    var url = `https://maps.googleapis.com/maps/streetview?size=${size[0]}x${size[1]}&location=${coord[0]},${coord[1]}&fov=${fov}&heading=${heading}&pitch=${pitch}&key=${api_key}&signature=${signature}`
    console.log(url) //testing purposes

    //fetch image
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            return imageUrl // use imageUrl for integration
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        }); 
}