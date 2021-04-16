const express =require('express');
const router = express.Router();
const {me} = require('../controllers/controllers');
router
      .get('/',me);


module.exports = router;