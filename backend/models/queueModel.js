import { DataTypes } from "sequelize";
import dbConnection from "../database/connection.js";

    // queue_number INT PRIMARY KEY,
    // status VARCHAR(20) DEFAULT 'waiting',
    // created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    // processed_at TIMESTAMP

const queueModel = dbConnection.define('queues', {
    queue_number: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(20),
        defaultValue: 'Waiting'
    },
    processed_at : {
        type: DataTypes.DATE
    }},
    {
        updatedAt: false,
        createdAt: "created_at"
    }
)

export default queueModel;


