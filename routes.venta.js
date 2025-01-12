const express = require('express');
const Venta = require('../models/venta');
const router = express.Router();

router.post('/', (req, res) => {
    const nuevaVenta = new Venta(req.body);
    nuevaVenta.save()
        .then(venta => res.status(201).json(venta))
        .catch(error => res.status(400).json({ error: error.message }));
});

module.exports = router;