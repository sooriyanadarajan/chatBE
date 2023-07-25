const Task = require('../models/task')

class TaskController {
    constructor() { }

    async create(req, res) {
        try {
            const task = await new Task(req.body).save();
            return res.status(200).json({ success: true, data: task, message: "New Task Created" });
        } catch (e) {
            return res.status(400).json({ success: false, message: "Something Went Wrong !" });
        }
    }

    async list(req, res) {
        try {
            const limit = parseInt(req.body.limit)
            const page = parseInt(req.body.page)
            const skip = (page - 1) * limit
            let list = await Task.find({ deleted: false }).sort({ _id: -1 }).skip(skip).limit(limit)
            let count = await Task.find({ deleted: false }).countDocuments()
            let output = {
                list,
                count,
            }
            return res.status(200).json({ success: true, data: output, message: "Task Listed !" });
        }
        catch (e) {
            return res.status(400).json({ success: false, message: "Something Went Wrong !" });
        }
    }

    async update(req, res, next) {
        try {
            let value = await Task.updateOne({ _id: req.body.id }, req.body);
            res.status(200).send({ success: true, data: value, message: "Successfully Updated task Details " })
        }
        catch (e) {
            return res.status(400).json({ success: false, message: "Something Went Wrong !" });
        }
    }

    //soft delete
    async delete(req, res) {
        try {
            let remove = await Task.findOne(req.body.id)
            remove.deleted = true;
            await remove.save();
            return res.status(200).json({ success: true, data: remove, message: "task delete" })
        }
        catch (e) {
            return res.status(400).json({ success: false, message: "Something Went Wrong !" });
        }
    }

    //hard delete
    // async delete(req, res) {
    //     try {
    //         await Task.deleteOne({ _id: req.body.id })
    //         return res.status(200).json({ success: true, message: "Task deleted permanently" });
    //     }
    //     catch (e) {
    //         return res.status(400).json({ success: false, message: "Something Went Wrong !" });
    //     }
    // }
}

module.exports = TaskController