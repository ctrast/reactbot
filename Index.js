const express = require('express');
const app = express();

//root handler
app.get('/', (req, res) => {
    res.send({ 'Hello There': '' });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT);