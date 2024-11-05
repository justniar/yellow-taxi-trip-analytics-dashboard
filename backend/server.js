const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express(); 
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/trips', async (req, res) => {
    try {
        const response = await axios.get('https://data.cityofnewyork.us/resource/gkne-dk5s.json', {
            params: req.query 
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
