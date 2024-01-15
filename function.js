window.function = async function (address) {
  
  if (address.value === undefined) return undefined;
  let adr = address.value;

   const response = await fetch
  (`https://randomuser.me/api/?results=3`);
  
  const data = await response.json();
  const jsonString = JSON.stringify(data); // Convert the object to a JSON string
    return jsonString;
  
}
