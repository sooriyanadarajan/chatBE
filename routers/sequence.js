

let express = require('express');
const chatbotSequence = require('../controllers/sequence')
const auth = require('../middlewares/auth')

let sequence_route = express.Router();


sequence_route.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})


sequence_route.post('/:user_Id', auth, chatbotSequence.addSequenceMaster);
sequence_route.patch('/:user_Id', auth, chatbotSequence.updateSequenceMaster);
sequence_route.delete('/:user_Id', auth, chatbotSequence.deleteSequenceMaster)
sequence_route.get('/',  chatbotSequence.getSequenceMaster);

module.exports = sequence_route;

