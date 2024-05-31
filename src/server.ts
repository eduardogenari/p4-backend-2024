import express from 'express';
import morgan from 'morgan';    
import cors from 'cors';

import forumsRouter from './forums';
import { defaultErrorHandler } from "./errors";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/forums", forumsRouter);

app.use(defaultErrorHandler);

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Forums API listening on http://localhost:${PORT}`);
});


