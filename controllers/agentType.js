const utils = require('../../../helpers/utils')
const log = require('../../../config/log_conf')()
const agentTypeMasterSchema = require('../models/agentType')


var addAgentTypeMaster = async function (req, res) {
    try {
        var agentTypeSchema = await new agentTypeMasterSchema(req.body).save()
        log.info('Successfully AgentType Created');
        return res.status(200).json({ success: true, data: agentTypeSchema, message: "New AgentType Created" });
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !" });
    }
}

var getAgentTypeMaster = async function (req, res) {
    try {
        var agentTypeSchema = await agentTypeMasterSchema.find({})
        return res.status(200).json({ success: true, data: agentTypeSchema, message: "AgentType data listed !!!" });
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !" });
    }
}

var updateAgentTypeMaster = async function (req, res) {
    try {
        var agentTypeSchema = await agentTypeMasterSchema.updateOne({ _id: req.body.id}, req.body)
        return res.status(200).json({ success: true, data: agentTypeSchema, message: "Successfully Updated AgentType Details !!!" });
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !" });
    }
}

var deleteAgentTypeMaster = async function (req, res) {
    try {
        var agentTypeSchema = await agentTypeMasterSchema.findByIdAndRemove(req.body.id)
        return res.status(200).json({ success: true, data: agentTypeSchema, message: "Deleted the AgentType Details !!!" });
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !" });
    }
}


module.exports = {
    addAgentTypeMaster: addAgentTypeMaster,
    getAgentTypeMaster: getAgentTypeMaster,
    updateAgentTypeMaster: updateAgentTypeMaster,
    deleteAgentTypeMaster: deleteAgentTypeMaster
}
