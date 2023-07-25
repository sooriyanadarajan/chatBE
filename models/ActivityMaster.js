const mongoose = require('mongoose');

const activityMaster = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    activity_Code: { type: String , required: true, max: 10},
    activity_Label: { type: String, required: true, max: 3 },
    activity_Description: { type: String, required: true, max: 30},
    activity_Short_Name: { type: String, required: true, max: 15 },
    activity_Level: { type: String , required: true, max: 10 },
    stage_Code: {  type: mongoose.Schema.Types.ObjectId, ref: 'stage_masters' },
    chat_Bot: { type: Boolean, default: false },
    agent: { type: Boolean, default: false },
    activity_Complexity: { type: String, required: true, max: 10 },
    activity_Status: { type: String, required: true, max: 10 },
    status: { type: Boolean },
    activity_Duration: { type: String, required: true, max: 3 },
    created_By: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
    created_On: { type: Date, default: Date.now() },
    edited_By: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
    edited_On: { type: Date, default: Date.now() }
}, { versionKey: false })

module.exports = mongoose.model('activity_masters', activityMaster)