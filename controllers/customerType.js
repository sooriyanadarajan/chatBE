const utils = require('../../../helpers/utils')
const log = require('../../../config/log_conf')()
const customerTypeMasterSchema = require('../models/customerType')


var addCustomerTypeMaster = async function (req, res) {
    try {
        var customerTypeSchema = await new customerTypeMasterSchema(req.body).save()
        return res.status(200).json({ success: true, data: customerTypeSchema, message: "New CustomerType Created"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !" });
    }
}

var getCustomerTypeMaster = async function (req, res) {
    try {
        var customerTypeSchema = await customerTypeMasterSchema.find({})
        return res.status(200).json({ success: true, data: customerTypeSchema, message: "CustomerType data listed !!!"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !" });
    }
}

var updateCustomerTypeMaster = async function (req, res) {
    try {
        var customerTypeSchema = await customerTypeMasterSchema.updateOne({ _id: req.body.id }, req.body)
        return res.status(200).json({ success: true, data: customerTypeSchema, message: " Successfully Updated CustomerType Details !!!"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !" });
    }
}

var deleteCustomerTypeMaster = async function (req, res) {
    try {
        var customerTypeSchema = await customerTypeMasterSchema.findByIdAndRemove(req.body.id)
        return res.status(200).json({ success: true, data: customerTypeSchema, message: " Deleted the CustomerType Details !!!"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !"});
    }
}


module.exports = {
    addCustomerTypeMaster: addCustomerTypeMaster,
    getCustomerTypeMaster: getCustomerTypeMaster,
    updateCustomerTypeMaster: updateCustomerTypeMaster,
    deleteCustomerTypeMaster: deleteCustomerTypeMaster
}
