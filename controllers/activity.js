const utils = require('../../../helpers/utils')
const log = require('../../../config/log_conf')()
const activityMasterSchema = require('../models/ActivityMaster.js')


var addActivityMaster = async function (req, res) {
    try {
        var activitySchema = await new activityMasterSchema(req.body).save()
        log.info('Successfully Activity Created')
        return res.status(200).json({ success: true, data: activitySchema, message: "New Activity Created" });
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !" });
    }
}

var getActivityMaster = async function (req, res) {
    try {
        var activitySchema = await activityMasterSchema.find({})
        return res.status(200).json({ success: true, data: activitySchema, message: "Activity data listed !!!" });
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !" });
    }
}

var updateActivityMaster = async function (req, res) {
    try {
        var activitySchema = await activityMasterSchema.updateOne({ _id: req.body.id }, req.body)
        return res.status(200).json({ success: true, data: activitySchema, message: " Successfully Updated Activity Details !!!" });
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !" });
    }
}

var deleteActivityMaster = async function (req, res) {
    try {
        var activitySchema = await activityMasterSchema.findByIdAndRemove(req.body.id)
        return res.status(200).json({ success: true, data: activitySchema, message: " Deleted the Activity Details !!!" });
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !" });
    }
}

module.exports = {
	addActivityMaster: addActivityMaster,
	getActivityMaster: getActivityMaster,
	updateActivityMaster: updateActivityMaster,
	deleteActivityMaster: deleteActivityMaster
}
