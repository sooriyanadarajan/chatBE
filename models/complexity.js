const mongoose = require('mongoose');


const complexityMaster = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    complexity_Code: { type: String },
    complexity_Name: { type: String },
    complexity_Description: { type: String },
    status: { type: String, default: 'active', enum: ['active', 'inactive', 'draft'] },
    status_Remarks: { type: String },
    created_By: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
    created_On: { type: Date, default: Date.now() },
    edited_By: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
    edited_On: { type: Date, default: Date.now() }
}, { versionKey: false })

module.exports = mongoose.model('complexity_masters', complexityMaster)