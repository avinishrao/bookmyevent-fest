const express = require('express')
const router = express.Router()
const user = require('../models/UserSchema.js')
const { body, validationResult } = require('express-validator');

const nameValidation = body('name', 'Invalid Name').isLength({ min: 5});
const passwordValidation = body('password', 'Invalid Password').isLength({ min: 5});
const emailVlaidation = body('email').isEmail();
// const appleId = body('appleId').isEmail();
const mobileValidation = body('mobile', 'Invalid Mobile Number').isLength({ min: 11, max: 11 });

router.post('/createuser', nameValidation, emailVlaidation, passwordValidation, mobileValidation, 
async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });;
    }

    try{
        await user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            mobile: req.body.mobile,
            location: req.body.location

        }).then(res.json({success:true}))

    } catch(error) {
        console.error("Error Message: ", error)
        res.json({success:false})
    }
})

module.exports = router;