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

// DELETE: /media/abc123 => remove selected media doc from _id param
router.delete('/:_id', async (req, res) => {
    try {
        await Media.findByIdAndDelete(req.params._id);
        return res.status(202).json({}); // 202: No Content
    }
    catch (err) {
        return res.status(404).json(err);  // 404: Not Found
    }
});

// PUT: /media/abc123 => update selected doc 
router.put('/:_id', async(req, res) => {
    try {
        const media = await Media.findByIdAndUpdate(req.params._id, req.body);
        return res.status(204).json(media); // 204: Resource Updated
    }
    catch (err) {
        return res.status(404).json(err);  // 404: Not Found
    }
});

module.exports = router;