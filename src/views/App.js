import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ListUser from "./User/ListUser";
import DetailUser from "./User/DetailUser";
let App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Learn React */}
          </a>
          <Switch>
            <Route path="/" exact={true}>
              <Home></Home>
            </Route>
            <Route path="/todo">
              <ListTodo></ListTodo>
            </Route>
            <Route path="/about">
              <MyComponent></MyComponent>
            </Route>
            <Route path="/user" exact={true}>
              <ListUser></ListUser>
            </Route>
            <Route path="/user/:id">
              <DetailUser></DetailUser>
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
