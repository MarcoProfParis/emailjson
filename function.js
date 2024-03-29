window.function2 = async function(json) {
    let test = JSON.parse(json.value);
    console.log("Value of json.webhook:", test.webhook);
    let url = test.webhook;
    return url;
};


window.function = async function(json) {
let obj = JSON.parse(json.value);
    console.log("Value of json.check:", obj.check);
if (obj.check === false) return "Waiting for check";
    let url = obj.webhook;
    console.log("Value of obj.webhook:", obj.webhook);
    const requestBody = json;

    // Append the password as a query parameter to the webhook URL
    // webhook += `?pwd=${encodeURIComponent(json.pwd)}`;
    // Check if webhook is a valid URL and if check is true
    


    console.log("Value of webhook:", obj.webhook);
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
        console.log("Value of ${webhook}:", obj.webhook);
        const response = await fetch(obj.webhook, requestOptions);
if (response.ok) {
                // Reset webhook trigger if response is ok
                window.function.webhookTriggered = false;
            }
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
