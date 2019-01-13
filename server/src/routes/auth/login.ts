import {Router} from 'express';
import * as jwt from 'jsonwebtoken';
import * as uuidv4 from 'uuid/v4';
import {readFileSync} from 'fs';
import {resolve} from 'path';

import {User, Token} from '../../models';

import {PRIVATE_KEY} from '../../config';

const router = Router();

router.post('/login', async (req, res) => {
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

    const jwtToken = jwt.sign({
        id: user._id,
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        isAdmin: !!user.isAdmin
    }, PRIVATE_KEY);
    
    const token: any = new Token({
        token: jwtToken,
        refresh: uuidv4()
    });

    await token.save();
    console.log(token.refresh);
    res.json({
        status: 'ok',
        token: jwtToken,
        refresh_token: token.refresh
    });
});

export default router;