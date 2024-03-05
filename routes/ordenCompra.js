const express = require("express");
const router = express.Router();

const {
    getOrdenCompra,
    getOrdenesCompras,
    createOrdenCompra,
    updateOrdenCompra,
    deleteOrdenCompra
} = require("../controllers/OrdenCompraController");

router.get('/:id',getOrdenCompra);
router.get('/',getOrdenesCompras);
router.post('/',createOrdenCompra);
router.patch('/:id',updateOrdenCompra);
router.delete('/:id',deleteOrdenCompra);

module.exports = router;