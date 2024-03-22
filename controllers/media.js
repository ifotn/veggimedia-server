const express = require('express');
const router = express.Router();
const Media = require('../models/media');

// GET: /media => fetch all media docs
router.get('/', async (req, res) => {
    try {
        const media = await Media.find();
        return res.status(200).json(media);
    }
    catch (err) {
        return res.status(404).json(err);
    }
});

// POST: /media => save new media doc from request body
router.post('/', async (req, res) => {
    try {
        const media = await Media.create(req.body);
        return res.status(201).json(media); // 201: Resource Created
    }
    catch (err) {
        return res.status(400).json(err);  // 400: Bad Request
    }
});


module.exports = router;