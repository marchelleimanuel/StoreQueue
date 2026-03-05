import { Sequelize } from "sequelize";
import Queue from "../models/queueModel.js"

export const getNomorAntrianController = async (req, res) => {
    const dataAntrian = await Queue.count();
    const antrian = dataAntrian + 1

    return res.status(200).json({
        response_message: 'SUCCESS',
        data: antrian
    });
}

export const createNomorAntrianController = async (req, res) => {
    await Queue.create();
    const dataAntrian = await Queue.count();
    const antrianTerakhir = dataAntrian + 1


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