
const express = require('express');

const app = new express();

app.use(express.static('static')). listen(5000, () => {
    console.log('Express serverlistens on port 5000');
})


