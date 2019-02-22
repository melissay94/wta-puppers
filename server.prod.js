const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`Working on port ${port}`);
});

app.use('/', express.static('dist'));

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'assets/index.html'));
})