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
