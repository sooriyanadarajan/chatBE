let express = require('express');
const product = require('../controllers/product')
const auth = require('../middlewares/auth')

let product_route = express.Router();


product_route.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})


product_route.post('/:user_Id',auth, product.addProductMaster);
product_route.patch('/:user_Id', auth, product.updateProductMaster);
product_route.delete('/:user_Id', auth, product.deleteProductMaster);
product_route.get('/',product.getProductMaster);


module.exports = product_route;
