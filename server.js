#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import { rps } from './lib/rpsls.js'
import { rpsls } from './lib/rpsls.js'

const argument = minimist(process.argv.slice(2));
const port = argument.port || 5000;
const app = express();




// API methods

