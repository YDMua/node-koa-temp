import cors from "@koa/cors"
import http from "http"
import Koa from "koa"
import bodyParser from "koa-bodyparser"
import router from "src/routes"
import { initEnv } from "./config/env"
import { connectToDatabase } from "./mongodb"

const app = new Koa()
initEnv()
app.use(
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"],
  })
)
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

const server = http.createServer(app.callback())
connectToDatabase()
  .then(() => {
    const PORT = process.env.PORT || 8000
    server.listen(PORT, () => {
      console.log(`Server is running http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.error("Failed to connect to the database", error)
  })
