window.function = function (number) {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=${number}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const jsonString = JSON.stringify(data);
    return jsonString;
  } catch (error) {
    console.error('Error fetching random user data:', error.message);
    return null;
  }
};

// Example usage
const numberOfResults = 3;
window.function(numberOfResults).then(jsonString => {
  return jsonString;
});
