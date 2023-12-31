const express = require('express')
const router = express.Router()
const { findAllCoworkings, findCoworkingByPk, createCoworking, updateCoworking, deleteCoworking, findAllCoworkingsRawSQL } = require('../controllers/coworkingControllers')
const { protect, restrictToOwnUser } = require('../controllers/authControllers')

router
    .route('/')
    .get(findAllCoworkings)
    .post(protect, createCoworking)

router
    .route('/rawsql')
    .get(findAllCoworkingsRawSQL)

router
    .route('/:id')
    .get(findCoworkingByPk)
    .put(protect, restrictToOwnUser, updateCoworking)
    .delete(protect, restrictToOwnUser, deleteCoworking)

module.exports = router