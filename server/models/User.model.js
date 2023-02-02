const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            require: true,
            min: 2,
            max:50,
        },
        
    }
)
module.exports = mongoose.model('users', UserSchema);