// Define a Set to store processed emails
const processedEmails = new Set();

window.function = async function(url, pwd, email) {
    if (url.value === undefined) return undefined;
    if (email.value === undefined) return "Enter your Email";
    if (pwd.value === undefined) return undefined;

    const webhook = url.value;
    const ch = email.value;

    // Check if email has already been processed
    if (processedEmails.has(ch)) {
        return "Data already processed"; // Return a message indicating data has been processed
    }

    const raw = JSON.stringify({
        params: {
            pwd: pwd.value,
            email: ch
        }
    });

    // Append the password as a query parameter to the webhook URL
    const webhookWithPwd = `${webhook}?pwd=${encodeURIComponent(pwd.value)}`;

    const requestOptions = {
        method: 'POST',
        body: raw,
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow'
    };

    const response = await fetch(webhookWithPwd, requestOptions);

    // Read the response body as plain text
    const data = await response.text();

    // Store the processed email to prevent processing it again
    processedEmails.add(ch);

    return data; // Return the plain text response
};
