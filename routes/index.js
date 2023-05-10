const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
require('dotenv').config();

const app=express();

// app.use(express.json());
//
// app.listen(3000, () => {
//   console.log(`Server Started at ${3000}`)
// })
//
//
// const mongoString = process.env.DATABASE_URL
// mongoose.connect(mongoString);
// const database = mongoose.connection
// database.on('error', (error) => {
//   console.log(error)
// })
//
// database.once('connected', () => {
//   console.log('Database Connected');
// })





/* Ejercicio 2. */
router.get('/Hola', function(req, res, next) {
  res.render('index', { title: 'Hola' });
});
router.get('/Mundo', function(req, res, next) {
  res.render('index', { title: 'mundo' });
});
/*Ejercicio 1*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hola mundo' });
});
module.exports = router;
