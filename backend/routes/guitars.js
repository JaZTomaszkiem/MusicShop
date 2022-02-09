"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let guitars = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ guitars: guitars });
});
router.post('/guitars', (req, res, next) => {
    const newGuitar = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    guitars.push(newGuitar);
    res
        .status(201)
        .json({ message: 'Added Guitar', guitar: newGuitar, guitars: guitars });
});
router.put('/guitar/:guitarid', (req, res, next) => {
    const gid = req.params.guitarid;
    const guitarIndex = guitars.findIndex((guitarItem) => guitarItem.id === gid);
    if (guitarIndex >= 0) {
        guitars[guitarIndex] = { id: guitars[guitarIndex].id, text: req.body.text };
        return res
            .status(200)
            .json({ message: 'Updated guitar', guitars: guitars });
    }
    res.status(404).json({ message: 'Could not find guitar of this id' });
});
router.delete('/guitar/:guitarId', (req, res, next) => {
    guitars = guitars.filter((guitarItem) => guitarItem.id !== req.params.guitarId);
    res.status(200).json({ message: 'Deleted guitar', guitars: guitars });
});
exports.default = router;
