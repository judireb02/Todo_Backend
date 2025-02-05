const router = require('express').Router();
const todoController = require('../controller/todo.controller');

router.post('/todo', todoController.createTodo);
router.put('/todo/:id', todoController.updateTodo);
router.delete('/todo/:id', todoController.deleteTodo);
router.get('/todo/:id', todoController.getTodos);

module.exports = router;