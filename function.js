window.function = async function(url,pwd,email) {
  if (url.value === undefined) return undefined;
  if (email.value === undefined) return undefined;
  if (pwd.value === undefined) return "waiting";
let webhook = url.value;
  const ch = email.value;
  const raw = JSON.stringify([
    {
        "params": {
            "pwd": {
                "type": "string",
                "value": pwd.value
            },
            "email": {
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
