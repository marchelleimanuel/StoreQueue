import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './database/connection.js';
import Queue from './models/queueModel.js';
import router from './routes/route.js';
import cors from 'cors'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(router);

app.get('/', (req, res) => {
    return res.send('helo berhasil');
});

try {
    await dbConnection.authenticate();
    // await Queue.sync({force: true});
    console.log('Database connected successfully..')
} catch (error) {
    console.log(error);
}

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}...`)
});