const { Router } = require('express');
const faker = require('faker');

const delay = time => new Promise(resolve => setTimeout(resolve, time));

const router = Router();

let todos = [];

router.use('/', async (req, res, next) => {
    await delay(2500);
    next();
});

router.put('/clear-completed-todos', async (req, res) => {
    todos = todos.map(todo => todo.isCompleted !== true ? todo : { ...todo, isDeleted: true });
    res.json(todos);
});

router.get('/', async (req, res) => {
    res.json(todos);
});

router.post('/', async (req, res) => {
    if (req.body && req.body.text) {
        const todo = {
            id: faker.random.uuid(),
            text: req.body.text,
            isCompleted: false,
            isDeleted: false
        };
        todos = [todo, ...todos];
        res.json(todo);
    } else {
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res) => {
    if (req.params.id) {
        todos = todos.map(todo => todo.id !== req.params.id ? todo : { ...todo, ...req.body, id: req.params.id });
        res.json(req.body);
    } else {
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    if (req.params.id) {
        todos = todos.map(todo => todo.id !== req.params.id ? todo : { ...todo, isDeleted: true });
        res.json(req.params.id);
    } else {
        res.sendStatus(500);
    }
});

module.exports = router;