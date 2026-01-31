import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import homeRouter from './routes/home.js';

const app = express();
const PORT = process.env.PORT || 3000;