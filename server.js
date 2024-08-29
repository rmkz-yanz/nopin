const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route untuk menghitung pengunjung
app.get('/count', (req, res) => {
    let count = 0;
    try {
        count = parseInt(fs.readFileSync('visitor_count.txt'));
    } catch (err) {
        console.error(err);
    }
    count++;
    fs.writeFileSync('visitor_count.txt', count.toString());
    res.json({ count });
});

// Route untuk menyajikan file statis
app.use(express.static(path.join(__dirname, 'public')));

// Menjalankan server
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
