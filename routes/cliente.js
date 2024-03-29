const express = require("express");
const router = express.Router();
const {
  getCliente,
  getClientes,
  obtenerCliente,
  createCliente,
  updateCliente,
  deleteCliente
} = require("../controllers/clienteController");

router.get('/', getClientes);
router.get('/:id', getCliente);
router.get('/obtenerCliente/user', obtenerCliente)
router.post('/', createCliente);
router.patch('/:id', updateCliente);
router.delete('/:id', deleteCliente);

module.exports = router;