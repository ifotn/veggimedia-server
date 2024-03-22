const express = require('express');
const router = express.Router();
const Media = require('../models/media');

// GET: /media 
router.get('/', async (req, res) => {
    try {
        const media = await Media.find();
        return res.json(media).status(200);
    }
    catch (err) {
        return res.json(err).status(404);
    }
});

module.exports = router;