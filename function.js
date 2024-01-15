window.function = async function (address) {
  
  if (address.value === undefined) return undefined;
  let number = address.value;

   const response = await fetch
  (`https://randomuser.me/api/?results=${number}`);
  
  const data = await response.json();
  const jsonString = JSON.stringify(data); // Convert the object to a JSON string
    return jsonString;
  
}
