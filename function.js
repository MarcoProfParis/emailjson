window.function = async function (code,url) {
  if (code.value === undefined) return undefined;

  const raw = JSON.stringify([
    {
        "params": {
            "q": {
                "type": "number",
                "value": 42
            },
            "recherche": {
                "type": "string",
                "value": "Butanol"
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

 

  const response = await fetch(`https://hook.eu1.make.com/8v5egatxkxez2xthfj7qmq1h5nn4c7n7`, requestOptions);
    const data = await response.json();

    const jsonString = JSON.stringify(data);
    return jsonString;
};
