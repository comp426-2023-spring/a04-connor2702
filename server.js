#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import { rps } from './lib/rpsls.js'
import { rpsls } from './lib/rpsls.js'

const argument = minimist(process.argv.slice(2));
const port = argument.port || 5000;
const app = express();


// API methods - used https://reflectoring.io/express-middleware/ and 
// https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/app', (req, res, next) => {
    res.status(200).send('200 OK');
});

app.get('/app/rps', (req, res, next) => {
    res.status(200).json(rps());
});

app.get('/app/rpsls', (req, res, next) => {
    res.status(200).json(rpsls());
});

app.get('/app/rps/play', (req, res, next) => {
    res.status(200).json(rps(req.query.shot));

});

app.get('/app/rpsls/play', (req, res, next) => {
    res.status(200).json(rpsls(req.query.shot));

});

app.post('/app/rps/play', (req, res, next) => {
    res.status(200).json(rps(req.body.shot));

});

app.post('/app/rpsls/play', (req, res, next) => {
    res.status(200).json(rpsls(req.body.shot));
});

app.get('/app/rps/play/:shot', (req, res, next) => {
    res.status(200).json(rps(req.params.shot));
});

app.get('/app/rpsls/play/:shot', (req, res, next) => {
    res.status(200).json(rpsls(req.params.shot));
});

app.all('*', (req, res, next) => {
    res.status(404).send('404 NOT FOUND');
});

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});