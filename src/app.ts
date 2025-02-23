import { type Request, type Response, Router } from 'express';
import { createUserController } from './controllers';
import { errorHandler } from './controllers/error-handler';
import 'express-async-errors';

const router = Router();

router.post('/users', (req: Request, res: Response) => createUserController.handle(req, res));

router.get('/', (_req: Request, res: Response) => {
    res.send({ message: 'Up' })
})

router.use(errorHandler);

export { router }
