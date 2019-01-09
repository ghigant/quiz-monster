import * as express from 'express';
import * as bodyParser from 'body-parser';
import {User} from './models';

import * as jwt from 'jsonwebtoken';

const port = 5050;
const host = '0.0.0.0';
const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    
    if (!username || !password) {
        return res.status(400).send('Bad Request')
    }

    const user: any = await User.findOne({
        username
    })
    .select('+hash +salt')
    .exec();

    if (!user) {
        return res.status(404).send('Not Found')
    }
    
    if (!user.validPassword(password)) {
        return res.status(404).send('Not Found')
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email,
        username: user.username,
        name: `${user.firstName} ${user.lastName}`,
        isAdmin: !!user.isAdmin
    }, 'strong_password');
    
    res.json({
        status: 'ok',
        token
    });
});

app.get('/', (req, res) => {
    res.status(400).send('Bad Request'); 
});

app.listen(port, host, () => {
    console.log(`Server listen on ${host}:${port}`);
});
