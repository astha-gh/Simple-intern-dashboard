const express = require('express');
const app = express();
const PORT = process.env.PORT || 7777;
const cors = require('cors');

app.use(cors());
 
const intern = require('./data/internData');
const leaderBoard = require('./data/leaderBoardData');

app.get('/', (req, res) => {
    res.send('App Loaded');
});


app.get('/api/intern' , (req , res) => {
    res.json(intern);
})

app.get('/api/leaderBoard' , (req , res) => {
    res.json(leaderBoard);
})

app.listen(PORT , () => {
    console.log(`Listening to port ${PORT}`);
});