import { Sequelize } from "sequelize";
import Queue from "../models/queueModel.js"

export const getNomorAntrianController = async (req, res) => {
    const antrian = await Queue.findOne({ order: [['queue_number', 'DESC']] });
    const nextAntrian = antrian ? antrian.queue_number + 1 : 1;

    return res.status(200).json({
        response_message: 'SUCCESS',
        data: nextAntrian
    });
}

export const createNomorAntrianController = async (req, res) => {
    await Queue.create();
    const dataAntrian = await Queue.count();
    const antrianTerakhir = dataAntrian + 1

    const io = req.app.get('io');
    io.emit('nomorAntrian', antrianTerakhir);

    return res.status(200).json({
        response_message: 'SUCCESS',
        data: antrianTerakhir
    });
}

export const getDaftarAntrianController = async (req, res) => {
    const daftarAntrian = await Queue.findAll({
        attributes: ['queue_number', 'status', 'created_at'],
        order: [['queue_number', 'ASC']]
    });

    const io = req.app.get('io');
    io.emit('daftarAntrian', daftarAntrian);

    return res.status(200).json({
        response_message: 'SUCCESS',
        data: daftarAntrian
    });
}

export const updateDaftarAntrianController = async (req, res) => {
    await Queue.update(
        { 
            status: 'Telah Diproses',
            processed_at: Sequelize.fn('NOW')
        },
        {
            where: {
                queue_number: req.body.queue_number
            }
        }
    );

    return res.status(200).json({
        response_message: 'SUCCESS',
    });
}