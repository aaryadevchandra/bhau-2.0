
const mongoose = require('mongoose');

const roastSchema = new mongoose.Schema({Roast: String});

module.exports = mongoose.model('Roast', roastSchema);