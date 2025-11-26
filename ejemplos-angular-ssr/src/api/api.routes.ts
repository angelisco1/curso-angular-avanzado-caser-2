import { Router } from "express";
import InformesController from './controllers/informes.controller'

const apiRouter = Router()

apiRouter.get('/informes', InformesController.getInformes)

export default apiRouter