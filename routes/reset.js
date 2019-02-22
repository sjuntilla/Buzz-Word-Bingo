const express = require('express');
const functions = require('../functions.js')
const router = express.Router();

router.post('/', (req, res) => {
    let body = req.body;

    if (!body.reset) {
        res.status(500);
        return res.json({
            'success': false
        })
    };

    functions.hardReset();
    res.status(200);
    return res.json({
        'success': true
    });
});

module.exports = router;