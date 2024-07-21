import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleUpdate = () => {
        updateTodo({
            ...todo,
            text: newText
        });
        setIsEditing(false);
    };

    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'list-group-item-success' : ''}`}>
            {isEditing ? (
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" onClick={handleUpdate}>Save</button>
                    </div>
                </div>
            ) : (
                <>
                    <span
                        className="todo-text"
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        onClick={() => updateTodo({ ...todo, completed: !todo.completed })}
                    >
                        {todo.text}
                    </span>
                    <div>
                        <button className="btn btn-secondary btn-sm mr-2" onClick={() => setIsEditing(true)}>Update</button>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>
                </>
            )}
        </li>
    );
};

export default TodoItem;
