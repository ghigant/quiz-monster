import {Schema} from 'mongoose';
import {authConnection} from './connections';
import * as crypto from 'crypto';

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "can't be blank"],
        lowercase: true,
        index: true,
        unique: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: [true, "can't be blank"],
        lowercase: true,
        index: true,
        unique: true
    },
    hash: {type: String, select: false},
    salt: {type: String, select: false},
    isAdmin: {type: Boolean, select: true}
}, {
    timestamps: true
});

userSchema.methods.setPassword = function (password: string) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 512, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function (password: string) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

export const User = authConnection.model('User', userSchema);