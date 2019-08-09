const mongoose = require('mongoose');
const express = require('express')
const router = express.Router();
const User = require('../../models/user');
const regMessage = require('../../models/resource')

router.post("/", (req, res) => {
    console.log(req);
    const regInfo = new User(req.body);
    const currentUsers = mongoose.model('users', regInfo.schema);
    const validateMsg = {
        sucessMsg: '',
        existMsg: '',
        saveErrMsg: '',
        reqMobMsg: '',
        reqFnameMsg: '',
        reqLnameMsg: '',
        reqEmailMsg: ''
    }
    if (req.body.email === null || req.body.email === '') {
        validateMsg['reqEmailMsg']  = regMessage.reqEmailMsg;
    }
    if (req.body.mobile_number === null || req.body.mobile_number === '') {
        validateMsg['reqMobMsg']  = regMessage.reqMobMsg;
    } 
    if (req.body.first_name === null || req.body.first_name === ''){
        validateMsg['reqFnameMsg']  = regMessage.reqFnameMsg;
    } 
    if (req.body.last_name === null || req.body.last_name === '') {
        validateMsg['reqLnameMsg']  = regMessage.reqLnameMsg;
    }
    console.log(validateMsg);
    
    
    
    // else {
    //     currentUsers.findOne({ 'email': req.body.email }, '_id', (err, user) => {
    //         if (user === null) {
    //             console.log(req.body);
    //             if (req.body.mobile_number === null || req.body.mobile_number === '') {
    //                 res.send(regMessage.reqMobMsg);
    //             } else if ((req.body.first_name === null || req.body.first_name === '') || (req.body.last_name === null || req.body.last_name === '')) {
    //                 res.send(regMessage.reqNameMsg);
    //             } else {
    //                 regInfo.save().then(item => {
    //                     res.send(regMessage.sucessMsg);
    //                 }).catch(err => {
    //                     console.log(err);
    //                     res.status(400).send(regMessage.saveErrMsg);
    //                 })
    //             }
    //         } else {
    //             res.send(regMessage.existMsg);
    //         }
    //     })
    // }
});

module.exports = router;