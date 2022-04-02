const express = require('express');

const Controller = require('./controller');

const router = express.Router();

router.post('/', Controller.Create);
router.get('/:id', Controller.Read);
router.patch('/:id', Controller.Update);
router.delete('/:id', Controller.Delete);
router.get('/:id', Controller.getById);
router.get('/', Controller.List);

module.exports = router;