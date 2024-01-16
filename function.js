window.function = async function (code,url,recherche) {
  if (code.value === undefined) return undefined;
let webhook = url.value;
  let recherchevalue = recherche.value:
  const raw = JSON.stringify([
    {
        "params": {
            "q": {
                "type": "number",
                "value": 42
            },
            "recherche": {
                "type": "string",
                "value": `${recherchevalue}`
            }
        }
    }
]);

  const requestOptions = {
    method: 'POST',
    bodyType: 'raw',
    body: raw,
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow'
  };

 

  const response = await fetch(`${webhook}`, requestOptions);
    const data = await response.json();

    const jsonString = JSON.stringify(data);
    return jsonString;
};
