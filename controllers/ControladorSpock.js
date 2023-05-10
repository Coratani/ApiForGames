
const Spock = require("../models/lagarto_spock");
const sendScore=async (req, res) => {
    const data = new Spock({
        name: req.body.name,
        userChoice: req.body.userChoice,
        computerChoice: req.body.computerChoice,
        winner: req.body.winner,
        date: req.body.date
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
        const data = await Spock.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const getScore=async (req, res) => {
    const id = Number(req.params.id)
    const score = await Spock.findById(req.params.id).exec()

    if (!score) {
        return res.status(404).send('Score not found')
    }
    res.json(score)
}
const deleteScore=async(req, res) => {
    try {
        const id = req.params.id;
        const data = await Spock.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
const updateScore=async (req, res) => {
    const id = Number(req.params.id)
    const score = await Spock.find(score => score.id === id)

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