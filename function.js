window.function = async function (address,apikey) {
  
  var raw = JSON.stringify(
    {
        "params": {
            "q": {
                "type": "number",
                "value": 14
            },
            "recherche": {
                "type": "string",
                "value": "Butanol"
            }
        }
    }
);

var requestOptions = {
  method: 'POST',
  bodyType: 'raw',
  body: raw,
  contentType: 'application/json',
  followRedirect: true
};
  if (address.value === undefined) return undefined;
  let number = address.value;

   const response2 = await fetch
  (`https://randomuser.me/api/?results=${number}`);

  const response = await fetch(`https://hook.eu1.make.com/8v5egatxkxez2xthfj7qmq1h5nn4c7n7`, requestOptions);
  
  const data = await response.json();
  const jsonString = JSON.stringify(data); // Convert the object to a JSON string
    return jsonString;
  
}





