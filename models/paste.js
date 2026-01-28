const mongoose = require('mongoose');


const PasteSchema = new mongoose.Schema({
content: { type: String, required: true },
createdAt: { type: Date, default: Date.now },
expiresAt: Date,
maxViews: Number,
remainingViews: Number
});


module.exports = mongoose.model('Paste', PasteSchema);