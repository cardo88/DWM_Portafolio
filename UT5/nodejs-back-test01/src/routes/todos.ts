import { Router } from "express";
import { Todo } from "../models/todo";

type RequestBody = { text: string };
type RequestParams = { todoId: string };
type RequestQueries = { isCompleted?: string; searchTerm?: string };

let todos: Todo[] = [
    { id: "t0", text: "do something...🦑", isCompleted: true },
    { id: "t1", text: "do something amazing ... 🦑⭐️", isCompleted: false },
    { id: "t2", text: "do nothing... 💤", isCompleted: false },
];

const router = Router();

router.get("/todos", (req, res, next) => {
    const params = req.query as RequestQueries;
    const isCompleted = params.isCompleted;
    const searchTerm = params.searchTerm;

    let todoList: Todo[] = todos;

    if (searchTerm) {
        todoList = todos.filter((e) => e.text.includes(searchTerm));
    } else {
        todoList = todos;
    }

    if (isCompleted) {
        let searchedState = isCompleted === "true";
        todoList = todoList.filter((e) => e.isCompleted === searchedState);
    }

    res.status(200).json({ todos: todoList });
});

router.get("/todos/:todoId", (req, res, next) => {
    const body = req.params as RequestParams;
    const { todoId } = body;

    if (!todoId) {
        return res.status(404).json({
            code: "INVALID_REQUEST",
            message: "The todoId field is required.",
        });
    }

    const foundTodo = todos.find((e) => e.id === todoId);
    if (!foundTodo) {
        return res.status(404).json({
            code: "TODO_NOT_FOUND",
            message: "The requested todo was not found.",
        });
    } else {
        return res.status(200).json({ todo: foundTodo });
    }
});

router.post("/todo", (req, res, next) => {
    const body = req.body as RequestBody;
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text,
        isCompleted: false,
    };

    todos.push(newTodo);
    res.status(201).json({ message: "Added Todo", todo: newTodo, todos: todos });
});

router.put("/todo/:todoId", (req, res, next) => {
    const params = req.params as RequestParams;
    const id = params.todoId;
    const body = req.body as RequestBody;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === id);

    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text,
            isCompleted: false,
        };
        return res.status(200).json({ message: "Updated todo", todos: todos });
    }
    res.status(404).json({ message: "Could not find todo for this id." });
});

router.delete("/todo/:todoId", (req, res, next) => {
    const params = req.params as RequestParams;
    todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
    res.status(200).json({ message: "Deleted todo", todos: todos });
});

export default router;
