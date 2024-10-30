// Get a reference to the search button
const searchButton = document.getElementById('search-button');

// Add click event listener to the search button
searchButton.addEventListener('click', searchLocation);

// Function to handle location search
function searchLocation() {
  // Get the user's input from the input field
  const location = document.getElementById('search-input').value;

  // Create a geocoder object
  const geocoder = new google.maps.Geocoder();

  // Use the geocoder to search for the specified location
  geocoder.geocode({ address: location }, function(results, status) {
    if (status === 'OK') {
      // If the search was successful, center the map on the first result
      map.setCenter(results[0].geometry.location);
    } else {
      // If the search was not successful, display an error message
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
