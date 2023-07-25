const utils = require('../../../helpers/utils')
const log = require('../../../config/log_conf')()
const sequenceMasterSchema = require('../models/SequenceMaster')



var addSequenceMaster = async function (req, res) {
    try {
        var sequenceSchema = await new sequenceMasterSchema(req.body).save()
        return res.status(200).json({ success: true, data: sequenceSchema, message: "New Sequence Created"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !"});
    }
}

var getSequenceMaster = async function (req, res) {
    try {
        var sequenceSchema = await sequenceMasterSchema.find({})
        return res.status(200).json({ success: true, data: sequenceSchema, message: "Sequence data listed !!!"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !"});
    }
}

var updateSequenceMaster = async function (req, res) {
    try {
        var sequenceSchema = await sequenceMasterSchema.updateOne({ _id: req.body.id }, req.body)
        return res.status(200).json({ success: true, data: sequenceSchema, message: " Successfully Updated Sequence Details !!!"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !"});
    }
}

var deleteSequenceMaster = async function (req, res) {
    try {
        var sequenceSchema = await sequenceMasterSchema.findByIdAndRemove(req.body.id)
        return res.status(200).json({ success: true, data: sequenceSchema, message: " Deleted the Sequence Details !!!"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !"});
    }
}


module.exports = {
    addSequenceMaster: addSequenceMaster,
    getSequenceMaster: getSequenceMaster,
    updateSequenceMaster: updateSequenceMaster,
    deleteSequenceMaster: deleteSequenceMaster
}
