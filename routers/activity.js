let express = require('express');
const chatbotActivity = require('../controllers/activity')
const auth = require('../middlewares/auth')

let activity_route = express.Router();


activity_route.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})


activity_route.post('/:user_Id',auth, chatbotActivity.addActivityMaster);
activity_route.patch('/:user_Id', auth, chatbotActivity.updateActivityMaster);
activity_route.delete('/:user_Id', auth, chatbotActivity.deleteActivityMaster);
activity_route.get('/',chatbotActivity.getActivityMaster);


module.exports = activity_route;
