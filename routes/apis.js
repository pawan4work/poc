var express = require('express');
var router = express.Router();

// route middleware to validate :id
router.param('id', function(req, res, next, id) {
    req.id = id;
    // go to the next thing
    next();
});


//All User Controller API
var userControl = require('./userController');

router.get('/getFirstTeam', userControl.getFirstTeam);
router.get('/getSecondTeam', userControl.getSecondTeam);

module.exports = router;