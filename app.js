const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 8080;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/login', (req, res) => {
    res.render('Login.ejs');
});
app.get('/register', (req, res) => {
    res.render('Registration.ejs');
});
app.get('/bid', (req, res) => {
    res.render('Bid.ejs');
});
app.get('/items', (req, res) => {
    res.render('items.ejs');
});
app.get('/carbid', (req, res) => {
    const data = {
        highestBidAmount: 10000, 
        biddingEndTime: "2024-05-10",
        liveParticipants: [
            { name: "John", bidAmount: 7500 },
            { name: "Alice", bidAmount: 8000 }
        ]
    };
    res.render('carbid', data);
});
app.post('/bid', (req, res) => {
    const bidAmount = req.body.bidAmount;
    res.render('bidConfirmation', { bidAmount: bidAmount }); 
});
app.get('/payment', (req, res) => {
    res.render('payment');
});

app.get('/meta', (req, res) => {
    res.render('Metabutton');
});
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});