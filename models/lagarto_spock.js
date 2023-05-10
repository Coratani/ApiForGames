const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({

    name: {
        required: true,
        type: String
    },
    userChoice: {
        required: true,
        type: String
    },
    computerChoice: {
        required: true,
        type: String
    },
    winner: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Lagarto_Spock', dataSchema)