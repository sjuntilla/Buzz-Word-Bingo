const express = require('express');
const app = express();
const PORT = 8080;
const bp = require('body-parser');

const buzz = require('./routes/buzzwords.js');
const reset = require('./routes/reset.js');
const heard = require('./routes/heard.js');

//SERVES UP INDEX.HTML
app.use(express.static('public'));
app.use(bp.urlencoded({
    extended: false
}));

app.use('/buzzwords', buzz);
app.use('/reset', reset);
app.use('/heard', heard);

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});