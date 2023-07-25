const mongoose = require('mongoose');


const sequenceMaster = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    sequence_Code: { type: String, unique: true, required: true, max: 10 },
    sequence_Label: { type: String, required: true, max: 10 },
    product_Code: { type: mongoose.Schema.Types.ObjectId, ref: 'product_masters' },
    customer_Type: { type: mongoose.Schema.Types.ObjectId, ref: 'customertype_masters' },
    stage_Code: { type: mongoose.Schema.Types.ObjectId, ref: 'stage_masters' },
    activity_Code: { type: mongoose.Schema.Types.ObjectId, ref: 'activity_masters' },
    chatbot_Message: { type: String, required: true, max: 30 },
    chatbot_Button_Message: { type: String, required: true },
    sequence_Description: { type: String, required: true, max: 50 },
    summary: { type: String, required: true, max: 50 },
    created_By: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
    created_On: { type: Date, default: Date.now() },
    edited_By: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
    edited_On: { type: Date, default: Date.now() }
}, { versionKey: false })

module.exports = mongoose.model('sequence_masters', sequenceMaster)