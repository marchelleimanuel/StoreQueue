import { DataTypes } from "sequelize";
import dbConnection from "../database/connection.js";

    // queue_number INT PRIMARY KEY,
    // status VARCHAR(20) DEFAULT 'waiting',
    // created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    // processed_at TIMESTAMP

const Queue = dbConnection.define('queues', {
    queue_number: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(20),
        defaultValue: 'Waiting'
    },
    processed_at : {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }},
    {
        updatedAt: false,
        createdAt: "created_at"
    }
)

export default Queue;


