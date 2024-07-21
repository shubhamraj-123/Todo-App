import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        };
        addTodo(newTodo);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Please add a new todo!"
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-primary ml-2" type="submit">Add todo</button>
                </div>
            </div>
        </form>
    );
};

export default TodoForm;
