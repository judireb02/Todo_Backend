const TodoService = require('../services/todo.services');
const todoService = new TodoService();

exports.getTodos = async (req, res) => {
    try {
        const { id } = req.params;
        const todos = await todoService.getTodos(id);
        res.status(200).json({status: true, message: 'Todos fetched successfully', data: todos});
    } catch (error) {
        res.status(500).json({ error: error.message, status: false });
    }
};


exports.createTodo = async (req, res) => {
    try {
        const { id, title, description } = req.body;
        console.log(title, description, id);

        const date = new Date();
        const todo = await todoService.createTodo(id, title, description, date);
        res.status(201).json({status: true, message: 'Todo created successfully', data: todo});
    } catch (error) {
        res.status(500).json({ error: error.message, status: false });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const todo = await todoService.updateTodo(id, title, description);
        res.status(200).json({status: true, message: 'Todo updated successfully', data: todo});
    } catch (error) {
        res.status(500).json({ error: error.message, status: false });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await todoService.deleteTodo(id);
        res.status(200).json({status: true, message: 'Todo deleted successfully', data: todo});
    } catch (error) {
        res.status(500).json({ error: error.message,    status: false });
    }
};