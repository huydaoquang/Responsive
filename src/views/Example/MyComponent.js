import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  //key:value
  state = {
    arrJobs: [
      { id: "1", title: "developer", salary: "500" },
      { id: "2", title: "tester", salary: "400" },
      { id: "3", title: "project manager", salary: "600" },
    ],
  };
  addNewJob = (job) => {
    console.log("🚀 ~ file: MyComponent.js ~ line 14 ~ MyComponent ~ job", job);
    // let currentJobs = this.state.arrJobs;
    // currentJobs.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">> run didUpdate",
      "prevState",
      prevState,
      "current state",
      this.state
    );
  }
  componentDidMount() {
    console.log(">>> run didMount");
  }
  render() {
    console.log(">>> call render:", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob}></AddComponent>

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        ></ChildComponent>
      </>
    );
  }
}
// class MyComponent extends React.Component {
//   //key:value
//   state = {
//     name: " ",
//     channel: "huy dz",
//   };
//   handleOnChangeName = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };
//   handleClickButton = () => {
//     alert("click me");
//   };
//   render() {
//     console.log(">>> call render:", this.state);
//     return (
//       <>
//         <div className="first">
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeName(event)}
//           ></input>
//           <div className="second">My name is {this.state["name"]}</div>
//         </div>
//         <div className="third">
//           <button onClick={() => this.handleClickButton()}>click me</button>
//         </div>
//         <div>my name : {this.state.channel}</div>
//       </>
//     );
//   }
// }
export default MyComponent;
