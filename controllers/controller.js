const { RiskModel } = require("../models/model");

async function addRisk(req, res) {
    try {
        
        const newRisk = new RiskModel(req.body);
    
        await newRisk.save();
    
        res.json({ success: true, message: 'Risk added successfully', data: newRisk });
      } catch (error) {
        res.status(500).json({ success: false, message: 'Error adding risk', error: error.message });
      }
}

async function getAllRisk(req, res) {
    try {
        const risk = await RiskModel.find();

        res.json({ success: true, data: risk });
      } catch (error) {
        res.status(500).json({ success: false, message: 'Error adding risk', error: error.message });
      }
}

async function getRisk(req, res) {
    try {
        const risk_score = req.params.score
        const risk = await RiskModel.findOne({risk_score});

        res.json({ success: true, data: risk });
      } catch (error) {
        res.status(500).json({ success: false, message: 'Error adding risk', error: error.message });
      }
}


module.exports = {
    addRisk,
    getAllRisk,
    getRisk
}