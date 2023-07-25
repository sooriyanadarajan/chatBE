const utils = require('../../../helpers/utils')
const log = require('../../../config/log_conf')()
const productMasterSchema = require('../models/product')

var addProductMaster = async function (req, res) {
    try {
        var productTypeSchema = await new productMasterSchema(req.body).save()
        return res.status(200).json({ success: true, data: productTypeSchema, message: "New Product Created"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !"});
    }
}

var getProductMaster = async function (req, res) {
    try {
        var productTypeSchema = await productMasterSchema.find({})
        return res.status(200).json({ success: true, data: productTypeSchema, message: "Product data listed !!!"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !"});
    }
}

var updateProductMaster = async function (req, res) {
    try {
        var productTypeSchema = await productMasterSchema.updateOne({ _id: req.body.id }, req.body)
        return res.status(200).json({ success: true, data: productTypeSchema, message: " Successfully Updated Product Details !!!"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !"});
    }
}

var deleteProductMaster = async function (req, res) {
    try {
        var productTypeSchema = await productMasterSchema.findByIdAndRemove(req.body.id)
        return res.status(200).json({ success: true, data: productTypeSchema, message: " Deleted the Product Details !!!"});
    } catch (e) {
        return res.status(400).json({ success: false, message: "Something Went Wrong !"});
    }
}


module.exports = {
    addProductMaster: addProductMaster,
    getProductMaster: getProductMaster,
    updateProductMaster: updateProductMaster,
    deleteProductMaster: deleteProductMaster
}
