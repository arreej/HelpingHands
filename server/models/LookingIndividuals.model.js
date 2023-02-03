const mongoose = require('mongoose');

const individualSchema = new mongoose.Schema({
   
    name:{
        type:String
    },
    contact:{
        type:String
    },
    email:{
        type:String
    },
    isVerifiedEmail:{
        type:Boolean,
        default:false
    },
    password:{
        type:String
    },
    describe:{
        type:String
    },
    typeofHelp:{
        type:String
    },
    address:{
        type:String
    },
    occupation:{
        type:String
    },
    willJoinOrganisation:{
        type:String
    }
})
module.exports = mongoose.model('lookingindividuals', individualSchema);