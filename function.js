window.function = async function(url, pwd, email) {
    if (url.value === undefined) return undefined;
    if (email.value === undefined) return "Enter your Email";
    if (pwd.value === undefined) return undefined;

    let webhook = url.value;
    const ch = email.value;
    const raw = JSON.stringify({
        params: {
            pwd: pwd.value,
            email: ch
        }
    });

    // Append the password as a query parameter to the webhook URL
    webhook += `?pwd=${encodeURIComponent(pwd.value)}`;

    const requestOptions = {
        method: 'POST',
        body: raw,
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow'
    };

    // Check if webhook has already been triggered
    if (!window.function.webhookTriggered) {
        // Set flag to indicate webhook has been triggered
        window.function.webhookTriggered = true;

        // Make the API call
        const response = await fetch(`${webhook}`, requestOptions);

        // Read the response body as plain text
        const data = await response.text();

        return data; // Return the plain text response
    } else {
        // Webhook already triggered, return a message indicating so
        return "Webhook already triggered for this dataset.";
    }
};
