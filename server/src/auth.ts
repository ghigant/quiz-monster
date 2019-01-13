import * as express from 'express';
import * as bodyParser from 'body-parser';

import auth from './routes/auth/login';
import refresh from './routes/auth/refresh';

const port = Number(process.env.PORT) || 5050;
const host = process.env.HOST || '0.0.0.0';
const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(auth);
app.use(refresh);

app.listen(port, host, () => {
    console.log(`Server listen on ${host}:${port}`);
});
