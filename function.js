window.function = async function (address,apikey) {
  var myHeaders = new Headers();
  let apikeyvalue = apikey.value;
myHeaders.append("X-API-KEY", "${apikeyvalue}");
myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
  "q": "apple inc"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
  if (address.value === undefined) return undefined;
  let number = address.value;

   const response2 = await fetch
  (`https://randomuser.me/api/?results=${number}`);

  const response = await fetch(`https://google.serper.dev/search`, requestOptions);
  
  const data = await response.json();
  const jsonString = JSON.stringify(data); // Convert the object to a JSON string
    return jsonString;
  
}





