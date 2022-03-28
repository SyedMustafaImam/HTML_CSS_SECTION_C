var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/check-user', function(req, res, next) {
  console.log(req.body)
  let {email, password} = req.body;
  if(email=='smustafa086@gmail.com' && password=='abc.123'){
    res.redirect('http://127.0.0.1:8080/verified.html')
  }else{
    res.send('User Not Verified')
  }

});

module.exports = router;
