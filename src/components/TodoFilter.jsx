import React from 'react';

const TodoFilter = ({ searchTerm, setSearchTerm, filter, setFilter }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Search todos"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
                className="form-control"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="all">View All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
            </select>
        </div>
    );
};

export default TodoFilter;
