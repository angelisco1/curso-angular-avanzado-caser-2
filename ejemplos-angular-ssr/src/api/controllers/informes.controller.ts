import { Request, Response } from "express"


const getInformes = (req: Request, res: Response) => {
  console.log('PASA POR LA API')
  return res.json({ok: true})
}

export default {
  getInformes,
}