window.function = function (number) {

  try {
    const response = await fetch(`https://randomuser.me/api/?results=${number}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching random user data:', error.message);
    return null;
  }

}
