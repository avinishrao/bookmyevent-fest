const express = require('express')
const router = express.Router()
const user = require('../models/UserSchema.js')
const { body, validationResult } = require('express-validator');

const nameValidation = body('name', 'Invalid Name').isLength({ min: 5});
const passwordValidation = body('password', 'Invalid Password').isLength({ min: 5});
const emailVlaidation = body('email').isEmail();
// const appleId = body('appleId').isEmail();
const mobileValidation = body('mobile', 'Invalid Mobile Number').isLength({ min: 11, max: 11 });

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "thisismyjwtsecretpassword";

router.post('/createuser', nameValidation, emailVlaidation, passwordValidation, mobileValidation, 
async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{

        const salt = await bcrypt.genSalt(10);
        const securedPass = await bcrypt.hash(req.body.password, salt)

        await user.create({
            name: req.body.name,
            email: req.body.email,
            password: securedPass,
            mobile: req.body.mobile,
            location: req.body.location

        }).then(res.json({success:true}))

    } catch(error) {
        console.error("Error Message: ", error)
        res.json({success:false})
    }
})

router.post('/loginuser', [emailVlaidation, passwordValidation],
async (req,res)=>{
    const email = req.body.email;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
        const userData = await user.findOne({email});
        if(!userData){
            return res.status(400).json({ errors: "Try logging in with correct credentials" });
        }

        const pwdCompare = await bcrypt.compare(req.body.password, userData.password);

        if(!pwdCompare){
            return res.status(400).json({ errors: "Try logging in with correct credentials" });
        }
        
        const data = {
            user: {
                id: userData.id
            }
        }

        const authToken = jwt.sign(data, jwtSecret);
        return res.json({success:true, authToken: authToken});
    } catch(error) {
        console.error("Error Message: ", error)
        res.json({success:false})
    }
})

module.exports = router;