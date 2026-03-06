import express from 'express';
import dotenv from 'dotenv';
import http from 'http';         
import { Server } from 'socket.io';           
import dbConnection from './database/connection.js';
import Queue from './models/queueModel.js';
import router from './routes/route.js';
import cors from 'cors';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: '*'
}); 
const PORT = process.env.PORT || 3000;

app.set('io', io); // biar bisa digunain io nya di tempat lain menggunakan (req.app.get('io'))
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

io.on('connection', (socket) => {
    console.log('Client terhubung...', socket.id);
    socket.on('disconnect', () => {
        console.log('Client terputus: ', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Application running on port ${PORT}...`)
});