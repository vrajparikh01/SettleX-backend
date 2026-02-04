const express = require('express');
const validate = require('../../../middlewares/validate');
const {onlyadmin} = require('../../../middlewares/auth');
const {equityValidation} = require('../../../validations');
const {equityController} = require('../../../controllers/')

const router = express.Router();


router.post('/', validate(equityValidation.addEquity), onlyadmin, equityController.addEquity);
router.get('/', validate(equityValidation.getEquities), equityController.getEquities);


module.exports = router;
