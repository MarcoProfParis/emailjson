window.function = async function(json) {
    try {
        // Parse JSON string
        const obj = JSON.parse(json.value);

        // Check if the JSON object has the `webhook` property
        if (!obj || !obj.webhook) {
            throw new Error('Invalid JSON format or missing "webhook" property');
        }

        // Retrieve the value from the `webhook` object
        const value = obj.webhook.value;

        // Check if `value` is undefined
        if (typeof value === 'undefined') {
            throw new Error('Value is undefined');
        }

        // Return the result
        return "Done3 " + value;
    } catch (error) {
        // Handle any errors
        console.error('Error:', error.message);
        return 'Error occurred';
    }
};


window.function2 = async function(json) {
const obj = JSON.parse(json);

    let webhook = obj.webhook;
    const requestBody = {
        params: json
    };

    // Append the password as a query parameter to the webhook URL
    // webhook += `?pwd=${encodeURIComponent(json.pwd)}`;
    // Check if webhook is a valid URL and if check is true
    

 await delay(5000);
    return '${webhook}';
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
