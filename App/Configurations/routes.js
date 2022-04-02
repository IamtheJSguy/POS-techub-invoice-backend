const express = require('express');
const middleware = require('../../Functions/Middlewares');
const Controller = require('./controller');

const router = express.Router();

router.post('/',  Controller.Create);
router.get('/',  Controller.List);
router.patch('/:id',  Controller.Update);
router.delete('/:id',  Controller.Delete);
router.get('/:id', Controller.Read);

module.exports = router;