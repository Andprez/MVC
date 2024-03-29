const express = require("express");
const router = express.Router();
const {
    getTipoAmbientes,
    getTipoAmbiente,
    createTipoAmbiente,
    updateTipoAmbiente,
    deleteTipoAmbiente,
} = require("../controllers/tipoAmbienteController");

router.get('/', getTipoAmbientes);
router.get('/:id', getTipoAmbiente);
router.post('/', createTipoAmbiente);
router.patch('/:id', updateTipoAmbiente);
router.delete('/:id', deleteTipoAmbiente);

module.exports = router;