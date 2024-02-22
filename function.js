window.function = async function(json) {
    // Check if json parameter is provided and contains the required fields
    if (!json || !json.1 || !json.2 || !json.3) return "Invalid JSON input";

    let webhook = json.1;
    const ch = json.3;
    const raw = JSON.stringify({
        params: {
            pwd: json.2,
            email: ch
        }
    });

    // Append the password as a query parameter to the webhook URL
    webhook += `?pwd=${encodeURIComponent(json.2)}`;

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
