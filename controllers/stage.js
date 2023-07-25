// const utils = require('../../../helpers/utils')
// const log = require('../../../config/log_conf')()
const stageMasterSchema = require('../models/stageMaster.js')

var addStageMaster = async function (req, res) {
    try {
        var stageSchema = await new stageMasterSchema(req.body).save()
        return res.status(200).json({success: true, data: stageSchema, message: "New StageMaster Created"});
    } catch (e) {
        return res.status(400).json({success: false, message: "Something Went Wrong !"});
    }
}

var getStageMaster = async function (req, res) {
    try {
        let search = {}
        if(req.body.active){
            search={status:'active'}
        } else if(req.body.inactive) {
            search = {status:'inactive'}
        } else if(req.body.draft){
            search = { status:'draft'}
        }
        var stageSchema = await stageMasterSchema.find(search).populate('product_Code customer_Type agent_Type')
        return res.status(200).json({ success: true, data: stageSchema, message: "StageMaster data listed !!!" });
    } catch (e) {
        return res.status(400).json({success: false, message: "Something Went Wrong !"});
    }
}

var updateStageMaster = async function (req, res) {
    try {
        var stageSchema = await stageMasterSchema.updateOne({ _id: req.body.id }, req.body)
        return res.status(200).json({success: true, data: stageSchema, message: " Successfully Updated StageMaster Details !!!"});
    } catch (e) {
        return res.status(400).json({success: false, message: "Something Went Wrong !" });
    }
}

var deleteStageMaster = async function (req, res) {
    try {
        var stageSchema = await stageMasterSchema.findByIdAndRemove(req.body.id)
        return res.status(200).json({success: true, data: stageSchema, message: " Deleted the StageMaster Details !!!"});
    } catch (e) {
        return res.status(400).json({success: false, message: "Something Went Wrong !"});
    }
}


module.exports = {
	addStageMaster: addStageMaster,
	updateStageMaster: updateStageMaster,
	getStageMaster: getStageMaster,
    deleteStageMaster: deleteStageMaster
}
