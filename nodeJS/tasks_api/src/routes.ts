import { Router, Request, Response } from 'express';

import { getTasks, saveTasks } from './controller/TasksController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello World! 3'})
});

routes.get('/tasks', getTasks)
routes.post('/tasks', saveTasks)

export default routes;