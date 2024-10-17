const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/zeroTrustDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define a Schema for the Zero-Trust Score
const ZeroTrustScoreSchema = new mongoose.Schema({
    averageShannonEntropyScore: Number,
    firewallDetected: Boolean,
    DNSsecEnabled: Boolean,
    tlsVersion: String,
    certificateBitStrength: Number,
    securityHeadersImplemented: [String],
    openPortsDetected: Number
});

// Create a Model
const ZeroTrustScore = mongoose.model('ZeroTrustScore', ZeroTrustScoreSchema);

// Routes
// Submit Zero-Trust Score Data
app.post('/submit-score', async (req, res) => {
    try {
        const scoreData = new ZeroTrustScore(req.body);
        await scoreData.save();
        res.status(201).send('Data submitted successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Retrieve All Scores
app.get('/scores', async (req, res) => {
    try {
        const scores = await ZeroTrustScore.find();
        res.json(scores);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Retrieve Score by ID
app.get('/score/:id', async (req, res) => {
    try {
        const score = await ZeroTrustScore.findById(req.params.id);
        if (!score) {
            return res.status(404).send('Score not found');
        }
        res.json(score);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Start the Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
