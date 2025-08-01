const express = require('express');
const app = express();
const PORT = 7777;
const cors = require('cors');

app.use(cors());

const intern = {
    'name' : "Astha Devadiga",
    'referralCode' : 'astha2025',
    'donationsRaised' : 12000,
    'Rewards' : ['Free T-Shirt' , 'Certificate'],
}

const leaderBoard = [
    {name : 'Ranjeet' , donationsRaised: 20000},
    {name : 'Sujata' , donationsRaised: 18000},
    {name : 'The Rock' , donationsRaised: 15000},
];

app.get('/api/intern' , (req , res) => {
    res.json(intern);
})

app.get('/api/leaderBoard' , (req , res) => {
    res.json(leaderBoard);
})

app.listen(PORT , () => {
    console.log(`Listening to port ${PORT}`);
});