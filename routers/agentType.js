let express = require('express');
const agentType = require('../controllers/agentType')
const auth = require('../middlewares/auth')

let agentType_route = express.Router();



agentType_route.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})


agentType_route.post('/:user_Id', auth,  agentType.addAgentTypeMaster);
agentType_route.patch('/:user_Id', auth, agentType.updateAgentTypeMaster);
agentType_route.delete('/:user_Id', auth, agentType.deleteAgentTypeMaster)
agentType_route.get('/',  agentType.getAgentTypeMaster);

module.exports = agentType_route;

