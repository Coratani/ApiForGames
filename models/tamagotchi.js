const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({

    petName: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    hunger: {
        required: true,
        type: Number
    },
    health:{
        required: true,
        type: Number
    },
    happiness: {
        required: true,
        type: Number
    },
    birthDate: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Tamagotchi', dataSchema)