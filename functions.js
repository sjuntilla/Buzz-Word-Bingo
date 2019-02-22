(function () {
    let words = {
        buzzwords: []
    };

    let tally = 0;

    const buzzList = () => {
        return words;
    };

    const addWord = (word, points) => {
        let newWord = {};
        newWord.word = word;
        newWord.points = points;
        words.buzzwords.push(newWord);
    }

    const findWord = (word) => {
        let idx = -1;
        words.buzzwords.forEach(i => {
            if (i.word === word) {
                return idx = words.buzzwords.indexOf(i);
            };
        });
        return idx;
    }

    const updateWord = (idx, points) => {
        words.buzzwords[idx].points = points;
    }

    const deleteWord = (idx) => {
        words.buzzwords.splice(idx, 1);
    }

    const hardReset = () => {
        words.buzzwords = [];
        tally = 0;
    }

    const newScore = (idx) => {
        tally += words.buzzwords[idx].points;
    }

    const scoreReport = () => {
        return tally;
    }

    module.exports = {
        addWord,
        buzzList,
        findWord,
        updateWord,
        deleteWord,
        hardReset,
        newScore,
        scoreReport
    }

})();