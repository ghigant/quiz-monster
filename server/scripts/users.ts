import {readFileSync} from 'fs';
import {join} from 'path';
import { User } from '../src/models/User';

const data = readFileSync(join(__dirname,'./data.json'));
const jsonData = JSON.parse(data.toString()); 

const admin: any = new User({
    username: 'valentin.botoc',
    email: 'valentin@botoc.ro',
    isAdmin: true,
    firstName: 'Valentin',
    lastName: 'Botoc'
});

admin.setPassword('valentin');

const cleanUp = async () => {
    return await User.deleteMany({}).exec();
}

const populate = () => {
    const queue = jsonData.map((jsonUser: any) => {
        const user: any = new User({
            ...jsonUser,
            username: jsonUser.IDN
        });
        const password = jsonUser.birthDate.split('/').join('-');
        user.setPassword(password);
        return user.save();
    });

    queue.push(admin.save());

    return Promise.all(queue);
};

const run = async () => {
    console.log('Clean Up');
    await cleanUp();
    console.log('Populate Database');
    await populate();
    console.log('Done');
    process.exit();
}

run().catch(console.error);