const mongoose = require('mongoose');

var taskSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true
    },
    deleted: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

var Task = mongoose.model('task', taskSchema);

module.exports = Task;