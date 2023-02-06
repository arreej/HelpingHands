const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            min: 2,
            max:50,
        },
        
    }
)
module.exports = mongoose.model('users', UserSchema);