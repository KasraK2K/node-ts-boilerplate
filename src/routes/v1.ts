import express from "express"
import swaggerUi from "swagger-ui-express"
import fs from "fs"
import path from "path"
import swaggerDocument from "../swagger"
import { routes as generalRoutes } from "../domains/general"
import { routes as userRoutes } from "../domains/user"

const swaggerOptions = {
  explorer: true,
  swaggerOptions: { validatorUrl: null },
}

const router = express.Router()

router.use("/general", generalRoutes)
router.use("/user", userRoutes)

// Swagger
router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions))

export default router
