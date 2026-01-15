const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, Images) from the current directory
app.use(express.static(__dirname));

// Send index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Valentine app is running!`);
    console.log(`Local link: http://localhost:${port}`);
});