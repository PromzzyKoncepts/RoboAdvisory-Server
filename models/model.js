
const mongoose = require('mongoose')

const riskSchema = new mongoose.Schema({
    risk_score: Number,
    nigerian_stocks: Number,
    foreign_stocks: Number,
    tech_stocks: Number,
    emerging_stocks: Number,
    nigerian_bonds: Number,
    foreign_bonds: Number,
    commodities: Number,
    real_estate: Number,
    t_bills: Number,
    alternative: Number
})

module.exports.RiskModel = mongoose.model('Risk', riskSchema)