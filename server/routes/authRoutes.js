const {Router}= require('express')
const {signupGet, signupPost,loginPost,loginGet} =require('../controllers/authController')
const router= Router()

router.get('/signup', signupGet)
router.post('/signup',signupPost)
router.get('/login', loginGet)
router.post('/login', loginPost)

module.exports = router