const express = require('express');
const router = express.Router();
const functions = require('../functions.js')

//GET BUZZWORDS
router.get('/', (req, res) => {
    let words = functions.buzzList();
    res.json(words)
})

//ADD A BUZZWORD
router.post('/', (req, res) => {
    let body = req.body;
    let list = functions.buzzList().buzzwords;
    if (list.length > 4) {
        res.status(500);
        return res.json({
            'ERROR': 'You can\'t have more than five buzzwords at a time!'
        });
    }
    if (isNaN(parseInt(body.points)) || !isNaN(parseInt(body.word))) {
        res.status(500);
        return res.json({
            'INVALID': 'Points should be a number and word should be a string.'
        })
    }
    functions.addWord(body.word, parseInt(body.points));
    res.status(200);
    res.json({
        'success': true
    });
});

//UPDATE A BUZZWORD'S POINTS
router.put('/', (req, res) => {
    let body = req.body;
    let word = functions.findWord(body.word);

    if (word < 0) {
        res.status(500);
        return res.json({
            'ERROR': 'Word does not exist!'
        });
    };

    functions.updateWord(word, parseInt(body.points));
    res.status(200);
    res.json({
        'success': true
    })


});

//DELETE A BUZZWORD
router.delete('/', (req, res) => {
    let body = req.body;
    let list = functions.buzzList().buzzwords;

    if (list.length - 1 < 0) {
        res.status(500);
        return res.json({
            'ERROR': 'List of Buzz Words is empty!'
        });
    };
    if (body.idx > list.length || body.idx < 0) {
        res.status(500);
        return res.json({
            'ERROR': 'Word does not exist!'
        });
    }
    if (body.idx >= 0) {
        functions.deleteWord(body.idx);
        return res.json({
            'success': true
        })
    }
});

module.exports = router;