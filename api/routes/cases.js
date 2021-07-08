const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Cases were fetched"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Case was created"
    });
});

router.get('/:caseId', (req, res, next) => {
    res.status(200).json({
        message: "Case details",
        caseId: req.params.caseId
    });
});

router.delete('/:caseId', (req, res, next) => {
    res.status(200).json({
        message: "Case deleted",
        caseId: req.params.caseId
    });
});

module.exports = router;