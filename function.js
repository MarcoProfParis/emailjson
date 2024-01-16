window.function = async function (codeapi,url,recherche) {
  if (url.value === undefined) return undefined;
  if (recherche.value === undefined) return undefined;
let webhook = url.value;
  const ch = recherche.value;
  const raw = JSON.stringify([
    {
        "params": {
            "q": {
                "type": "string",
                "value": codeapi.value
            },
            "recherche": {
                "type": "string",
                "value": ch
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
