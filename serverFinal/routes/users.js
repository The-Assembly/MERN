const router = require("express").Router();
let User = require("../models/user.model.js");

router.route('/').get((req,res)=>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err))
})

router.route('/add').post((req,res)=>{
    const newUser = new User(req.body);
    newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json(err))

})

module.exports = router;