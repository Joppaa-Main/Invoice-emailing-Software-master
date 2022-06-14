var express = require('express');
var router = express.Router();
var AccountController = require('../controllers/accountController');

// /* View users  */
// router.get('/', UserController.viewUsers);

router.get('/all', AccountController.useraccount_list);
router.get('/createnew', AccountController.useraccount_create_get);
// router.get('/user', UserController);
router.post('/createnew',AccountController.useraccount_create_post);
// // router.update('/user/:id/update', UserController);
// // router.delete('/user/:id/delete', UserController);
// //specific routes with id
// router.get('/user/:id/delete', UserController);
// router.post('/user/:id/delete',UserController);
// router.get('/user/:id/update', UserController);
// router.post('/user/:id/update',UserController);
// router.get('/user/:id', UserController);





module.exports = router;
