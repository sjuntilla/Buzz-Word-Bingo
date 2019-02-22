const express = require('express');
const functions = require('../functions.js')
const router = express.Router();

router.post('/', (req, res) => {
    let body = req.body;
    let idx = functions.findWord(body.word);

    if (idx < 0) {
        res.status(500);
        return res.send({
            'ERROR': 'Word does not exist!'
        });
    };

    functions.newScore(idx);
    let tally = functions.scoreReport();
    res.status(200);
    res.json({
        'SCORE TOTAL': `${tally}`
    });
});

module.exports = router;