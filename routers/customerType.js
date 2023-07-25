let express = require('express');
const customerType = require('../controllers/customerType')
const auth = require('../middlewares/auth')
let customerType_route = express.Router();


customerType_route.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})


customerType_route.post('/:user_Id', customerType.addCustomerTypeMaster);
customerType_route.patch('/:user_Id', auth, customerType.updateCustomerTypeMaster);
customerType_route.delete('/:user_Id', auth, customerType.deleteCustomerTypeMaster)
customerType_route.get('/',  customerType.getCustomerTypeMaster);


module.exports = customerType_route;

