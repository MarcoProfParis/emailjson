window.function = async function(url, pwd, email) {
    if (url.value === undefined) return undefined;
    if (email.value === undefined) return undefined;
    if (pwd.value === undefined) return "waiting";

    let webhook = url.value;
    const ch = email.value;
    const raw = JSON.stringify({
        params: {
            pwd: pwd.value,
            email: ch
        }
    });

    // Append the password as a query parameter to the webhook URL
    webhook += `?password=${encodeURIComponent(pwd.value)}`;

    const requestOptions = {
        method: 'POST',
        body: raw,
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow'
    };

    const response = await fetch(`${webhook}`, requestOptions);
    
    // Check if the response is successful
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Read the response body as plain text
    const data = await response.text();

    return data; // Return the plain text response
};
