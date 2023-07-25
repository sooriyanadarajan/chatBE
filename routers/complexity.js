let express = require('express');
let complexity_route = express.Router();
const complexity = require('../controllers/complexity')
const auth = require('../middlewares/auth')


complexity_route.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

complexity_route.post('/:user_Id', auth,  complexity.addComplexityMaster);
complexity_route.patch('/:user_Id', auth, complexity.updateComplexityMaster);
complexity_route.delete('/:user_Id', auth, complexity.deleteComplexityMaster)
complexity_route.get('/',  complexity.getComplexityMaster);


module.exports = complexity_route;



