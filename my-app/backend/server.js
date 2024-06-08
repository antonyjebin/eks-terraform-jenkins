const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let dataStore = []; // In-memory data store

// Get all items
app.get('/items', (req, res) => {
    res.json(dataStore);
});

// Add a new item
app.post('/items', (req, res) => {
    const item = req.body;
    dataStore.push(item);
    res.status(201).json(item);
});

// Delete an item by index
app.delete('/items/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < dataStore.length) {
        const deletedItem = dataStore.splice(index, 1);
        res.json(deletedItem);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
