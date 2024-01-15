window.function = async function (address) {
  var myHeaders = new Headers();
myHeaders.append("X-API-KEY", "af11acbd8b6f6784169d15a28dc16eca264582be");
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

  const response = await fetch("https://google.serper.dev/search", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
  const data = await response.json();
  const jsonString = JSON.stringify(data); // Convert the object to a JSON string
    return jsonString;
  
}





