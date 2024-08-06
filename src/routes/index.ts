import Router from "koa-router"
import { userController } from "src/controllers"

const router = new Router()

/** 获取用户列表 */
router.get("/user_list", userController.getUserList)
/** 用户注册 */
router.post("/register", userController.registerUser)

export default router
