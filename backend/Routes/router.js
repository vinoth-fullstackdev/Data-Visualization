const express = require('express');
const router = express.Router();
const Data = require('../Model/db'); // Adjust the path as necessary

// Route to get all data
router.get('/data', async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve data' });
    }
});

// Route to add new data
router.post('/todata', async (req, res) => {
    try {
        const newData = new Data(req.body);
        const savedData = await newData.save();
        res.status(201).json(savedData);
    } catch (err) {
        res.status(400).json({ error: 'Failed to Post the data', details: err.message });
    }
});

// Route to get all Present of Persons
router.get('/data/in', async (req, res) => {
    try {
        const data = await Data.find({ status:'In'});
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve data from Present' });
    }
});

//Routes to get the Absent of Persons

router.get('/data/out',async(req,res)=>{
    try{
        const data = await Data.find({status:'Out'});
        res.status(200).json(data)
    } catch(err){
        res.status(500).sendjson({error:'Failed to retrived Data from Absent'})
    }
})

module.exports = router;
