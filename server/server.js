require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , chalk = require('chalk');

let app = express();

app.use( bodyParser.json() );



let port = 3003;
const portChalk = chalk.cyan.underline
app.listen( port, () => {
    console.log( portChalk(`listening_on_port_${port}`) )
})