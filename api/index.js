import { Router } from "express"
import admin from "./routes/admin/index.js"
import board from "./routes/board/index.js"
import auth from "./routes/auth/index.js"

// guaranteed to get dependencies
export default () => {
  const app = Router()

  admin(app)
  auth(app)
  board(app)

  return app
}