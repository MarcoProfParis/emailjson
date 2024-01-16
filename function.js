window.function = async function (code,recherche,webhook) {
  if (address.value === undefined) return undefined;
let q1 = code.value;
let recherche1 = recherche.value;
let webhook1 = webhook.value;
  const raw = JSON.stringify([
    {
        "params": {
            "q": {
                "type": "number",
                "value": ${q1}
            },
            "recherche": {
                "type": "string",
                "value": `${recherche1}`
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

  const response = await fetch(`https://hook.eu1.make.com/8v5egatxkxez2xthfj7qmq1h5nn4c7n7`, requestOptions);
    const data = await response.json();

    const jsonString = JSON.stringify(data);
    return jsonString;
};
