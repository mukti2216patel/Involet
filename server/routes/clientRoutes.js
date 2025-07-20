const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/clientController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add-client', authMiddleware, ClientController.addclient);
router.get('/get-clients', authMiddleware, ClientController.getClients);
router.get('/get-client/:id', authMiddleware, ClientController.getSelectedClient);
module.exports = router;    