import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const updateTodo = (updatedTodo) => {
        setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'pending') return !todo.completed;
        return true;
    }).filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Todo App</h1>
            <TodoFilter 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                filter={filter} 
                setFilter={setFilter} 
            />
            <TodoForm addTodo={addTodo} />
            <TodoList todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;

