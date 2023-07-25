const mongoose = require('mongoose');

const stageMaster = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    stage_Code: { type: String, unique: false, required: false },
    stage_Label: { type: String, required: false },
    stage_Description: { type: String, required: false },
    stage_Short_Name: { type: String, required: false},
    product_Code: { type: String, required: false,
        // type: mongoose.Schema.Types.ObjectId, ref: 'productCode'
    },
    customer_Type: { type: String, required: false},
    // customer_Type: { type: mongoose.Schema.Types.ObjectId, ref: 'customertype_masters', required: false },
    stage_Complexity: { type: String, required: false },
    chat_Bot: { type: String, required: false },
    // chat_Bot: { type: Boolean, required: false },
    agent_Type: { type: String, required: false},
    // agent_Type: { type: mongoose.Schema.Types.ObjectId, ref: 'agenttype_masters', required: false},
    delegation_NonLending_Power: { type: String, required: false },
    // delegation_NonLending_Power: { type: Boolean, required: false },
    check_Point: { type: String, required: false },
    // check_Point: { type: Boolean, required: false },
    status: { type: String, default: 'active', enum: ['active', 'inactive', 'draft'] , required: false},
    // created_By: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
    created_On: { type: Date, default: Date.now() },
    // edited_By: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
    edited_On: { type: Date, default: Date.now() },
    // activity_id: { type: mongoose.Schema.Types.ObjectId, ref: 'activity_masters' }
}, { versionKey: false })

module.exports = mongoose.model('stage_masters', stageMaster)