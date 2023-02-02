const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    goalAmount: {
        required: true,
        type: Number
    }
    
})

module.exports = mongoose.model('campaign', campaignSchema);