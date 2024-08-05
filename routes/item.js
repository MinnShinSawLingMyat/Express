const express = require("express");
const router = express.Router();

const ItemController = require('../controllers/ItemController');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage })

router.post('/', upload.single('image'), ItemController.create);

module.exports = { ItemRouter: router };