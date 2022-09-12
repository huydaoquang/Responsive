import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import Color from "../HOC/Color";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "doing homework" },
      { id: "todo2", title: "doing homework" },
      { id: "todo3", title: "doing homework" },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Wow so easy!");
  };
  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast.success("Delete success!");

    console.log(
      "🚀 ~ file: ListTodo.js ~ line 21 ~ ListTodo ~ handleDeleteTodo ~ todo",
      todo
    );
  };
  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];
      let objIndex = listTodosCopy.findIndex((item) => item.id == todo.id);
      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("update success!");

      return;
    }
    this.setState({
      editTodo: todo,
    });
  };
  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(
      "🚀 ~ file: ListTodo.js ~ line 42 ~ ListTodo ~ render ~ isEmptyObj",
      isEmptyObj
    );
    return (
      <>
        <p>Simple TODO Apps with React.js (Eric &amp; Hoi Dan IT)</p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo}></AddTodo>
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnchangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "save"
                        : "edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default Color(ListTodo);
