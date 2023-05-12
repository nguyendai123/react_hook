import { useState } from "react";
const Todo = (props) => {
  //properties
  // parent => child, top => bottom
  const {
    todos,
    title,
    deleteDataTodo,
    editTodo,
    handleEditTodo,
    changeEditTodo,
  } = props;
  console.log("check edittodo", editTodo);

  const handleDelete = (id) => {
    deleteDataTodo(id);
  };
  const ehandleEditTodo = (todo) => {
    handleEditTodo(todo);
  };
  const handleChangeEdit = (event) => {
    changeEditTodo(event);
  };
  return (
    //let isEmptyObj = Object.keys(editTodo).length === 0;
    //console.log("check",isEmptyObj);
    <div className="todos-container">
      <div className="title">{title}</div>

      {todos.map((todo) => {
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log("editTodo1234", editTodo);
        return (
          <div key={todo.id}>
            {isEmptyObj ? (
              <span className="todo-child">
                {" "}
                {todo.title}
                &nbsp; &nbsp;
              </span>
            ) : (
              <>
                {editTodo.todo.id === todo.id ? (
                  <span onChange={(event) => handleChangeEdit(event)}>
                    <input value={editTodo.title} />
                  </span>
                ) : (
                  <span className="todo-child">
                    {" "}
                    {todo.title}
                    &nbsp; &nbsp;
                  </span>
                )}
              </>
            )}

            <button onClick={() => ehandleEditTodo(todo)}>
              {!isEmptyObj && editTodo.todo.id === todo.id ? "save" : "edit"}
            </button>

            <span onClick={() => handleDelete(todo.id)}>x</span>
          </div>
        );
      })}

      <hr />
    </div>
  );
};

export default Todo;
