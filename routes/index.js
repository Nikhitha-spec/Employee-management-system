// routes/index.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.post('/create', homeController.create);
router.get('/delete/:id', homeController.delete);
router.get('/edit/:id', homeController.edit);
router.post('/update/:id', homeController.update);

module.exports = router;
