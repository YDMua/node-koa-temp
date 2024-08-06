import crypto from "crypto"
import { Context } from "koa"
import { UserModel } from "src/models/user"
import { IRegisterParams } from "src/types/user"

const getUserList = async (ctx: Context) => {
  const query = ctx.query as unknown as any
  const { keyword, offset, limit, user_id } = query
  const regex = new RegExp(keyword, "i")
  const users = await UserModel.find({
    user_name: regex || undefined,
    user_id: { $ne: user_id },
  })
    .select("-_id -__v")
    .skip(offset || 0)
    .limit(limit || 100)
    .lean()
    .exec()
  ctx.body = { data: users || [], code: 200, msg: "" }
}

const _generateUserId = () => {
  const bytes = crypto.randomBytes(3)
  const userId = (parseInt(bytes.toString("hex"), 16) % 900000) + 100000
  return userId
}

const registerUser = async (ctx: Context) => {
  const { user_name, password } = ctx.request.body as IRegisterParams
  const name = user_name?.trim() || ""
  if (!name || !password) {
    ctx.body = { data: null, code: 400, msg: "账号或密码不能为空" }
    return
  }
  let curUser = await UserModel.findOne({ user_name: name }).lean()
  if (curUser?.user_id) {
    ctx.body = { data: null, code: 400, msg: "账号已存在" }
    return
  }
  const user_id = _generateUserId()
  await UserModel.insertMany([{ user_name, password, user_id }])
  curUser = await UserModel.findOne({ user_name, password })
    .select("-password -_id")
    .lean()
  ctx.body = { data: true, code: 200, msg: "" }
}

export { getUserList, registerUser }
