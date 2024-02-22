window.function = async function(json) {


    let webhook = json.webhook;
    const requestBody = {
        params: json
    };

    // Append the password as a query parameter to the webhook URL
    // webhook += `?pwd=${encodeURIComponent(json.pwd)}`;
    // Check if webhook is a valid URL and if check is true
    if (!json.check) {
        return json.check;
    }

 await delay(5000);
    return "Sending to webhook";
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(requestBody),
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

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

// Function to introduce delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
