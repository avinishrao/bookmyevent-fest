const express = require('express')
const router = express.Router()

router.post('/bookevents',(req,res)=>{
    try {
        res.send([global.bme_card, global.bme_card_category])
    } catch (error) {
        console.error(error.message);
        res.send("Server Error");
    }
})

module.exports = router