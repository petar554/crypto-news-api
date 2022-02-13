const port = 8000;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const newspapers = [
    {
        name: 'coindesk',
        address: 'https://www.coindesk.com/',
        base: ''
    },
    {
        name: 'cryptonews',
        address: 'https://cryptonews.com/',
        base: ''
    },
    {
        name: 'nextadvisor',
        address: 'https://time.com/nextadvisor/investing/cryptocurrency/latest-crypto-news/',
        base: ''
    },
    {
        name: 'bitcoin',
        address: 'https://news.bitcoin.com/',
        base: ''
    }
]

app.get('/', (req, res) => {
    res.json('Welcome to my API');
})

app.listen(port, () => console.log('server running on PORT ${PORT}'))