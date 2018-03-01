import { RequestHandler, Router } from "express";
import * as faker from "faker";

interface Todo {
    id: string,
    text: string,
    isCompleted: boolean,
    isDeleted: boolean
}

let todos: Todo[] = [
    {
        id: "1",
        text: "test todo",
        isCompleted: false,
        isDeleted: false
    }
];

const delay = time => new Promise(resolve => setTimeout(resolve, time));

const router = Router();

router.put('/clear-completed-todos',async (req, res) => {
    await delay(2500);
    todos = todos.map(todo => todo.isCompleted !== true ? todo : { ...todo, isDeleted: true });
    res.json(todos);
});

router.get('/', async (req, res) => {
    await delay(2500);
    res.json(todos);
});

router.post('/', async (req, res) => {
    await delay(2500);
    if (req.body && req.body.text) {
        const todo: Todo = {
            id: faker.random.uuid(),
            text: req.body.text,
            isCompleted: false,
            isDeleted: false
        };
        todos = [todo, ...todos];
        res.json(todo);
    } else {
        res.sendStatus(500);
    };
});

router.put('/:id', async (req, res) => {
    await delay(2500);
    if (req.params.id) {
        todos = todos.map(todo => todo.id !== req.params.id ? todo : { ...todo, ...req.body, id: req.params.id });
        res.json(req.body);
    } else {
        res.sendStatus(500);
    };
});

router.delete('/:id', async (req, res) => {
    await delay(2500);
    if (req.params.id) {
        todos = todos.map(todo => todo.id !== req.params.id ? todo : { ...todo, isDeleted: true });
        res.json(req.params.id);
    } else {
        res.sendStatus(500);
    };
});

export default router;