const Todo = require('../model/todo.model');

class TodoService {

    async getTodos(userId) {
        try {
            const todos = await Todo.find({ userId });
            return todos;
        } catch (error) {
            throw new Error("Error fetching todos");
        }
    }

    async createTodo(userId, title, description, date) {
        try {
            console.log(userId, title, description, date);
            const todo = new Todo({
                userId,
                title,
                description,
                date
            });
            return await todo.save();
        } catch (error) {
            throw new Error("Error creating todo");
        }
    }

    async updateTodo(id, title, description) {
        try {
            const todo = await Todo.findById(id);
            if (!todo) {
                throw new Error("Todo not found");
            }
            todo.title = title;
            todo.description = description;
            return await todo.save();
        } catch (error) {
            throw new Error("Error updating todo");
        }
    }

    async deleteTodo(id) {
        try {
            const result = await Todo.deleteOne({ _id: id });

            if (result.deletedCount === 0) {
                throw new Error("Todo not found");
            }
    
         
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TodoService;