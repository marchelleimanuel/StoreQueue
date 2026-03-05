import express from 'express';
const app = express();
const PORT = 3000;

// app.use(express.json());

app.get('/', (req, res) => {
    return res.send('helo berhasil');
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}...`)
});