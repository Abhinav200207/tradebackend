const Trade = require('../model/trade')

exports.initializeProduct = async (req, res) => {
    try {
        const product = await Trade.create(req.body);
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getTrade = async (req, res) => {
    try {
        const product = await Trade.find();
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}