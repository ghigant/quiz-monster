import {resolve} from 'path';
import {readFileSync} from 'fs';

export const PRIVATE_KEY = readFileSync(
    resolve(__dirname, '../../../keys/jwtRS256.key')
);

export const AUTH_CONNECTION_STRING = 'mongodb://localhost/auth';

export const QUIZ_CONNECTION_STRING = 'mongodb://localhost/quiz';