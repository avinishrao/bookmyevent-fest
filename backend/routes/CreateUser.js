const express = require('express')
const router = express.Router()
const user = require('../models/UserSchema.js')

router.post('/createuser', async (req,res)=>{
    try{
        await user.create({
            gmail: req.body.gmail,
            email: req.body.email,
            appliId: req.body.appliId,
            mobile: req.body.mobile,
            date: req.body.date
        })
        res.json({Response: "User Created"})

    } catch(error) {
        console.error("Error Message: ", error)
        res.json({Response: "Error while creating User"})
    }
})

module.exports = router;