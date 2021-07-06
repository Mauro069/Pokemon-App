const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send('Esta ruta anda')
});

module.exports = router