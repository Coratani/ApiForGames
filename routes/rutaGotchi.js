const express = require('express');
var bodyParser = require('body-parser');
const router = express.Router()
const Model = require('../models/tamagotchi');
module.exports = router;

var app = express();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

const  {
    getAllScores,
    getScore,
    sendScore,
    updateScore,
    deleteScore
} = require('../controllers/ControladorTamagotchi.js')



//Post Method
router.post('/tamagotchi', sendScore)

//Get all Method
router.get('/tamagotchi/score', getAllScores)

//Get by ID Method
router.get('/getOne/:id',getScore)

//Update by ID Method
router.patch('/update/:id',updateScore)

//Delete by ID Method
router.delete('/delete/:id',deleteScore)
