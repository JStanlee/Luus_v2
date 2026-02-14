import https from 'https';

// Wklej tutaj swój klucz API (ten z .env)
const API_KEY = process.env.VITE_GEMINI_API_KEY || "AIzaSyBLKBvy2_uaQdUi10ZRmIxbsD4-tNr2RhI";

const data = JSON.stringify({
    contents: [{ parts: [{ text: "Hello" }] }]
});

const options = {
    hostname: 'generativelanguage.googleapis.com',
    path: `/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

console.log(`Testing API Key: ${API_KEY.substring(0, 10)}...`);

const req = https.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);

    let chunks = [];
    res.on('data', (d) => chunks.push(d));

    res.on('end', () => {
        const body = Buffer.concat(chunks).toString();
        try {
            const json = JSON.parse(body);
            if (res.statusCode === 200) {
                console.log("SUCCESS! Your API Key is valid.");
                console.log("Response:", json.candidates[0].content.parts[0].text);
            } else {
                console.error("FAILURE! API Key invalid or other error.");
                console.error("Error Message:", json.error.message);
            }
        } catch (e) {
            console.log("Raw Response:", body);
        }
    });
});

req.on('error', (error) => {
    console.error("Network Error:", error);
});

req.write(data);
req.end();
