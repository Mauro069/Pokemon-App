const router = require('express').Router();

router.get('/', function (_req, res) {
    res.send('Hola')
});
  
module.exports = router