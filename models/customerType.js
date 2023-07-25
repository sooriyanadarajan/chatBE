const mongoose = require('mongoose');


const customerMaster = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    customer_type_Code: { type: String },
    customer_type_Name: { type: String },
    customer_type_Description: { type: String },
    status: { type: String, default: 'active', enum: ['active', 'inactive', 'draft'] },
    status_Remarks: { type: String },
    created_By: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
    created_On: { type: Date, default: Date.now() },
    edited_By: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
    edited_On: { type: Date, default: Date.now() }
}, { versionKey: false })

module.exports = mongoose.model('customertype_masters', customerMaster)