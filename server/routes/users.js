var express = require('express');
var router = express.Router();
const Model = require('../models/User.model');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('No Users Found');
});

router.get('/get/:id', function(req, res, next) {
    res.send('No ID Found');
});

router.get('/getall', function(req, res, next) {
    const data = Model.find();
    console.log(data);
    res.send("Finding...")
});

router.post('/', (req, res, next) => {
    const data = new Model({
      fullName: req.body.name,
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
