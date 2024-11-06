const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DataVisualization')
const dataSchema = new mongoose.Schema({
    Product:{
        type: String,
        required: true    
    },
    Quantity: {
        type: Number,
        required: true    
    },
    status:{
        type: String,
        enum: ['In', 'Out'], // Limits status to either "In" or "Out"
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now  // Sets default value to current date
    }
});

// Create and export the model based on the schema
module.exports = mongoose.model('Data',dataSchema);

