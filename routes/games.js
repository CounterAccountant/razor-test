var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Adi_kitten = new mongoose.Schema({
    name: String,
    completed: Boolean,
    note: String,
    updated_at: { type: Date, default: Date.now },
});



Adi_kitten.methods.speak = function () {
    var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
};
var Kitten = mongoose.model('Adi_kitten', Adi_kitten);

router.post('/', function(){

    var silence = new Kitten({ name: 'lowBallGame' });
    console.log(silence.name);

});


router.get('/', function(req, res, next) {
    Adi_kitten.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
        console.log(res);
    });
});
module.exports = router;
