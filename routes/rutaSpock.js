const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router()
module.exports = router;

const app = express();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
const  {
    getAllScores,
    getScore,
    sendScore,
    updateScore,
    deleteScore
} = require('../controllers/ControladorSpock.js')

//Post Method
router.post('/Spock', sendScore)

//Get all Method
router.get('/Spock/scores',getAllScores )

//Get by ID Method
router.get('/Spock/scores/:id',getScore)

//Update by ID Method
router.patch('/update/:id', updateScore)

//Delete by ID Method
router.delete('/Spock/:id', deleteScore)

module.exports=router