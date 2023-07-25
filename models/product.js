const mongoose = require('mongoose');

const productMaster = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    product_Code: { type: String, max: 10},
    product_Name: { type: String ,  max: 30},
    product_Description: { type: String , max: 30},
    product_Category: { type: String, max: 20 },
    product_Type: { type: String, max: 30 },
    zone: { type: Number, max: 10 },
    city: { type: String, max: 15 },
    region: { type: String, max: 20 },
    status: { type: String, default: 'active', enum: ['active', 'inactive', 'draft'] },
    created_By: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
    created_On: { type: Date, default: Date.now() },
    edited_By: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
    edited_On: { type: Date, default: Date.now() }
}, { versionKey: false })

module.exports = mongoose.model('product_masters', productMaster)