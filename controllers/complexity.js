const utils = require('../../../helpers/utils')
const log = require('../../../config/log_conf')()
const complexityMasterSchema = require('../models/complexity')

var addComplexityMaster = async function (req, res) {
    try {
        var complexityTypeSchema = await new complexityMasterSchema(req.body).save()
        return res.status(200).json({ success: true, data: complexityTypeSchema, message: "New CustomerType Created"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !"});
    }
}

var getComplexityMaster = async function (req, res) {
    try {
        var complexityTypeSchema = await complexityMasterSchema.find({})
        return res.status(200).json({ success: true, data: complexityTypeSchema, message: "Complexity data listed !!!"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !"});
    }
}

var updateComplexityMaster = async function (req, res) {
    try {
        var complexityTypeSchema = await complexityMasterSchema.updateOne({ _id: req.body.id }, req.body)
        return res.status(200).json({ success: true, data: complexityTypeSchema, message: " Successfully Updated Complexity Details !!!"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !"});
    }
}

var deleteComplexityMaster = async function (req, res) {
    try {
        var complexityTypeSchema = await complexityMasterSchema.findByIdAndRemove(req.body.id)
        return res.status(200).json({ success: true, data: complexityTypeSchema, message: " Deleted the Complexity Details !!!"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !"});
    }
}


module.exports = {
    addComplexityMaster: addComplexityMaster,
    getComplexityMaster: getComplexityMaster,
    updateComplexityMaster: updateComplexityMaster,
    deleteComplexityMaster: deleteComplexityMaster
}
