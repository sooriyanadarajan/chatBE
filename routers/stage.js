let express = require('express');
const chatbotStage = require('../controllers/stage')
const auth = require('../middlewares/auth')

let stage_route = express.Router();

stage_route.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})


stage_route.post('/:user_Id', chatbotStage.addStageMaster);
stage_route.put('/:user_Id', auth, chatbotStage.updateStageMaster)
stage_route.delete('/:user_Id', auth, chatbotStage.deleteStageMaster)
stage_route.post('/', chatbotStage.getStageMaster);

module.exports = stage_route;
