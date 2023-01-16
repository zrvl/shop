const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', typeController.create)
router.get('/', typeController.getAll)
router.get("/:id", typeController.getOne);
router.delete('/', typeController.delete)
router.put('/',typeController.put)

module.exports = router
