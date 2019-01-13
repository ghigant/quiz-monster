import {Schema} from 'mongoose';
import {authConnection} from './connections';

const tokenSchema = new Schema({
    token: String,
    refresh: String
}, {
    timestamps: true
});

export const Token = authConnection.model('Token', tokenSchema);