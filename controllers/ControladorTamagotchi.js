
const Tamagotchi = require("../models/tamagotchi");

const sendScore=async (req, res) => {
    const data = new Tamagotchi({
        petName: req.body.petName,
        age: req.body.age,
        hunger: req.body.hunger,
        health: req.body.health,
        happiness: req.body.happiness,
        birthDate: req.body.birthDate
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getAllScores=async (req, res) => {
    try {
        const data = await Tamagotchi.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const getScore=async (req, res) => {
    const id = Number(req.params.id)
    const score = await Tamagotchi.find(score => score.id === id)

    if (!score) {
        return res.status(404).send('Score not found')
    }
    res.json(score)
}
const deleteScore=async(req, res) => {
    try {
        const id = req.params.id;
        const data = await Tamagotchi.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
const updateScore=async (req, res) => {
    const id = Number(req.params.id)
    const score = await Tamagotchi.find(score => score.id === id)

    if (!score) {
        return res.status(404).send('Score not found')
    }
    res.json(score)
}
module.exports = {
    getScore,
    sendScore,
    getAllScores,
    deleteScore,
    updateScore
}