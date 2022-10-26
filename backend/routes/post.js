const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', auth, postCtrl.getAllPosts);

router.get('/:id',  auth,  postCtrl.getOnePost);

router.post('/',  auth, multer, postCtrl.createPost);

router.post('/:id/like', auth,  postCtrl.likePosts);


router.put('/:id', auth, multer, postCtrl.modifyPost);

router.delete('/:id', auth, postCtrl.deletePosts);
module.exports = router;