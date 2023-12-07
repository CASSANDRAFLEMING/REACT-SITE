import React from 'react';
import { createRoot } from 'react-dom/client';

const toDo = (
    <main>
        <h1>To Do List</h1>
        <div>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
            </ul>
        </div>
        <div>
            <h2>Add item</h2>
            <input type="text" />
            <button type="submit"/>
        </div>
    </main>
)

const container = document.getElementById('app');
const root = createRoot(container);
root.render(toDo);
