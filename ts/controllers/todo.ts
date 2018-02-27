import { RequestHandler, Router } from "express";
import * as faker from "faker";

interface Todo {
    id: string,
    text: string,
    isComplete: boolean,
    isDeleted: boolean
}

let todos: Todo[] = [
    {
        id: "1",
        text: "test todo",
        isComplete: false,
        isDeleted: false
    }
];

const router = Router();

router.get('/', (req, res) => {
    res.json(todos);
});

router.post('/', (req, res) => {
    if (req.body.text) {
        todos.push({
            id: faker.random.uuid(),
            text: req.body.text,
            isComplete: false,
            isDeleted: false
        });
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    };
});

router.put('/:id', (req, res) => {
    if (req.body.id) {
        res.json(todos);
        todos = todos.map(todo => todo.id !== req.params.id ? todo : { ...todo, ...req.body, id: todo.id });
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    };
});

router.delete('/:id', (req, res) => {
    if (req.body.id) {
        res.json(todos);
        todos = todos.filter(todo => todo.id !== req.params.id);
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    };
});

export default router;