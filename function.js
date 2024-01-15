window.function = async function (address) {
  
  if (address.value === undefined) return undefined;
  let adr = address.value;

   const response = await fetch
  (`https://maps.googleapis.com/maps/api/geocode/json?address=${adr}&key=Your API Key`);
  
  const data = await response.json();
  return (`${data.results[0].geometry.location.lat}, ${data.results[0].geometry.location.lng}`);
  
}
