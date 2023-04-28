#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import { rps } from './lib/rpsls.js'
import { rpsls } from './lib/rpsls.js'

const argument = minimist(process.argv.slice(2));
const port = argument.port || 5000;
const app = express();


// API methods - used https://reflectoring.io/express-middleware/ and 
// https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm for help

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

app.get('/app', (req, res, next) => {
    res.json({'message': '200 OK'});
    res.status(200);
});

app.get('/app/rps', (req, res, next) => {
    res.json(rps());
    res.status(200);
});

app.get('/app/rpsls', (req, res, next) => {
    res.json(rpsls());
    res.status(200);
});

app.get('/app/rps/play', (req, res, next) => {
    res.json(rps(req.query.shot));
    res.status(200);

});

app.get('/app/rpsls/play', (req, res, next) => {
    res.json(rpsls(req.query.shot));
    res.status(200);

});

app.post('/app/rps/play', (req, res, next) => {
    res.json(rps(req.body.shot));
    res.status(200);

});

app.post('/app/rpsls/play', (req, res, next) => {
    res.json(rpsls(req.body.shot));
    res.status(200);
});

app.get('/app/rps/play/:shot', (req, res, next) => {
    res.json(rps(req.params.shot));
    res.status(200);
});

app.get('/app/rpsls/play/:shot', (req, res, next) => {
    res.json(rpsls(req.params.shot));
    res.status(200);
});

app.all('*', (req, res, next) => {
    res.json({'message': '404 NOT FOUND'});
    res.status(404);
});
