const mongoose = require('mongoose');


const agentMaster = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    agent_type_Code: { type: String },
    agent_type_Name: { type: String },
    agent_type_Description: { type: String },
    status: { type: String, default: 'active', enum: ['active', 'inactive', 'draft'] },
    status_Remarks: { type: String },
    created_By: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
    created_On: { type: Date, default: Date.now() },
    edited_By: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
    edited_On: { type: Date, default: Date.now() }
}, { versionKey: false })

module.exports = mongoose.model('agenttype_masters', agentMaster)