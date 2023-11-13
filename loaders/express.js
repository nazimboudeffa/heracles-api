import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import morgan from "morgan"

import config from "../config/index.js"

export default async ({ app }) => {
  app.enable("trust proxy")

  app.use(cors())
  app.use(
    morgan("combined", {
      skip: () => process.env.NODE_ENV === "test",
    })
  )
  app.use(cookieParser())
  app.use(bodyParser.json())

  app.get("/health", (req, res) => {
    res.status(200).send("OK")
  })

  return app
}