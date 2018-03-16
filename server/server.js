require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , chalk = require('chalk');

let app = express();

app.use( bodyParser.json() );

massive( process.env.DATABASE_URI )
    .then( db => {
        console.log( chalk.magenta('Connected to Database!') );
        app.set( 'db', db )
        app.get('db').init.seed().then( res => {
            console.log( res )
        }).catch( err => console.log( err ))
    })

app.get( '/api/get_marvel', ( req, res ) => {
    console.log( 'hit' )
    app.get('db').get_marvel()
        .then( response => res.status(200).send( response ) )
} )

app.get( '/api/get_dc', ( req, res ) => {
    app.get('db').get_dc()
        .then( response => res.send( response ))
} )

let port = 3003;
const portChalk = chalk.cyan.underline
app.listen( port, () => {
    console.log( portChalk(`listening_on_port_${port}`) )
})