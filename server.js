const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.post('/', (req, res) => {
    res.send('Post');
});

app.put('/', (req, res) => {
    res.send('Put');
});

app.delete('/', (req, res) => {
    res.send('Delete');
});

app.listen(3000, () => console.log('Server running on port 3000'))