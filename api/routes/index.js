import { Router } from "express"

const route = Router()

export default app => {
  app.use("/products", route)

  route.get('/jobs').get(route)
  route.post('/create').post(route)

  return app
}