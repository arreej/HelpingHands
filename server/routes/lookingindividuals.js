var express = require("express");
var router = express.Router();
const Model = require("../models/LookingIndividuals.model");

/*get looking individuals list*/
router.get('/', function(req,res,next){
    res.send("No Donees Found");
});

router.get('/get/:id', function(req,res,next){
    res.send('No ID found');
});

router.get('/getall', function(req,res,next){
    const data = Model.find();
    console.log(data);
    res.send("Finding...")

});

router.post('/', (req,res,next) =>{
    const data = new Model({
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email,
        isVerifiedEmail: req.body.isVerifiedEmail,
        password: req.body.password,
        describe: req.body.describe,
        typeofHelp: req.body.typeofHelp,
        address: req.body.address,
        occupation: req.body.occupation,
        willJoinOrganisation:req.body.willJoinOrganisation
    });
    try {
        const dataToSave = data.save();
        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
module.exports = router;
