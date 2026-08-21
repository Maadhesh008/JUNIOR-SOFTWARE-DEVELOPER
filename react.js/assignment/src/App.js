import { useState } from "react";
import "./App.css";

function App() {
  const [columns, setColumns] = useState([
    { id: 1, title: "Column 1", color: "#e3f2fd" },
    { id: 2, title: "Column 2", color: "#e8f5e9" },
    { id: 3, title: "Column 3", color: "#fff3e0" },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [draggedId, setDraggedId] = useState(null);

  // Add a column
  const addColumn = () => {
    const newColumn = {
      id: Date.now(),
      title: `Column ${columns.length + 1}`,
      color: "#f3e5f5",
    };

    setColumns([...columns, newColumn]);
  };

  // Remove a column
  const removeColumn = () => {
    if (columns.length > 1) {
      setColumns(columns.slice(0, -1));
    }
  };

  // Change number of columns using textbox
  const changeColumnCount = (value) => {
    const count = Number(value);

    if (!count || count < 1) return;

    let newColumns = [...columns];

    while (newColumns.length < count) {
      newColumns.push({
        id: Date.now() + newColumns.length,
        title: `Column ${newColumns.length + 1}`,
        color: "#f5f5f5",
      });
    }

    while (newColumns.length > count) {
      newColumns.pop();
    }

    setColumns(newColumns);
  };

  // Edit title or color
  const updateColumn = (id, field, value) => {
    setColumns(
      columns.map((column) =>
        column.id === id
          ? { ...column, [field]: value }
          : column
      )
    );
  };

  // Reorder using order number
  const changeOrder = (id, newPosition) => {
    const position = Number(newPosition);

    if (
      !position ||
      position < 1 ||
      position > columns.length
    ) {
      return;
    }

    const currentIndex = columns.findIndex(
      (column) => column.id === id
    );

    const newColumns = [...columns];

    const [movedColumn] = newColumns.splice(currentIndex, 1);

    newColumns.splice(position - 1, 0, movedColumn);

    setColumns(newColumns);
  };

  // Start dragging
  const handleDragStart = (id) => {
    setDraggedId(id);
  };

  // Drop column
  const handleDrop = (targetId) => {
    if (draggedId === null || draggedId === targetId) {
      return;
    }

    const draggedIndex = columns.findIndex(
      (column) => column.id === draggedId
    );

    const targetIndex = columns.findIndex(
      (column) => column.id === targetId
    );

    const newColumns = [...columns];

    const [draggedColumn] = newColumns.splice(
      draggedIndex,
      1
    );

    newColumns.splice(targetIndex, 0, draggedColumn);

    setColumns(newColumns);
    setDraggedId(null);
  };

  return (
    <div className="app">

      <h1>Wireframe Grid</h1>

      <div className="controls">

        <label>
          Number of Columns:
          <input
            type="number"
            min="1"
            value={columns.length}
            onChange={(e) =>
              changeColumnCount(e.target.value)
            }
          />
        </label>

        <button onClick={removeColumn}>−</button>

        <button onClick={addColumn}>+</button>

      </div>

      <p className="instruction">
        Drag columns to reorder them, or change their order
        number.
      </p>

      <div className="grid">

        {columns.map((column, index) => (

          <div
            key={column.id}
            className="column"
            draggable
            onDragStart={() =>
              handleDragStart(column.id)
            }
            onDragOver={(e) => e.preventDefault()}
            onDrop={() =>
              handleDrop(column.id)
            }
            style={{
              backgroundColor: column.color,
            }}
          >

            <div className="column-header">

              <h2>{column.title}</h2>

              <button
                className="edit-button"
                onClick={() =>
                  setEditingId(
                    editingId === column.id
                      ? null
                      : column.id
                  )
                }
              >
                Edit
              </button>

            </div>

            <div className="order">

              <label>Order:</label>

              <input
                type="number"
                min="1"
                max={columns.length}
                value={index + 1}
                onChange={(e) =>
                  changeOrder(
                    column.id,
                    e.target.value
                  )
                }
              />

            </div>

            <div className="drop-area">
              Drag and drop
              <br />
              to reorder
            </div>

            {editingId === column.id && (

              <div className="editor">

                <label>Title</label>

                <input
                  type="text"
                  value={column.title}
                  onChange={(e) =>
                    updateColumn(
                      column.id,
                      "title",
                      e.target.value
                    )
                  }
                />

                <label>Color</label>

                <input
                  type="text"
                  value={column.color}
                  onChange={(e) =>
                    updateColumn(
                      column.id,
                      "color",
                      e.target.value
                    )
                  }
                />

                <div className="color-options">

                  {[
                    "#ffcdd2",
                    "#c8e6c9",
                    "#bbdefb",
                    "#fff9c4",
                    "#e1bee7",
                  ].map((color) => (

                    <button
                      key={color}
                      className="color-button"
                      style={{
                        backgroundColor: color,
                      }}
                      onClick={() =>
                        updateColumn(
                          column.id,
                          "color",
                          color
                        )
                      }
                    />

                  ))}

                </div>

              </div>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
