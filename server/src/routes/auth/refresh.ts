import {Router} from 'express';

const rotuer = Router();

rotuer.post('/refresh', (req, res) => {
    res.send('Work in progress');
});

export default rotuer;