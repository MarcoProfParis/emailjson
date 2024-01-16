window.function = async function (code,recherche,webhook) {
  if (address.value === undefined) return undefined;
let q = code.value;
let recherche = recherche.value;
let webhook = webhook.value;
  const raw = JSON.stringify([
    {
        "params": {
            "q": {
                "type": "number",
                "value": q
            },
            "recherche": {
                "type": "string",
                "value": '${recherche}'
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

  let number = address.value;

  const response = await fetch('${webhook}', requestOptions);
    const data = await response.json();

    const jsonString = JSON.stringify(data);
    return jsonString;
};
