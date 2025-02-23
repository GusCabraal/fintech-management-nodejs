import { type Request, type Response, Router } from 'express';
const router = Router();

router.get('/', (_req: Request, res: Response) => {
    res.send({ message: 'Up' })
})

export { router }
