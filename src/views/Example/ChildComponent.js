import React from "react";
import "./Demo.scss";
class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleOnClickDelete = (job) => {
    console.log(
      "🚀 ~ file: ChildComponent.js ~ line 13 ~ ChildComponent ~ handleOnClickDelete ~ job",
      job
    );
    this.props.deleteAJob(job);
  };
  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log("check conditional:", check);
    return (
      <>
        {showJobs === false ? (
          <div>
            <button
              style={{ color: "blue" }}
              onClick={() => this.handleShowHide()}
            >
              show
            </button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <></>
                    <span onClick={() => this.handleOnClickDelete(item)}>
                      X
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>high</button>
            </div>
          </>
        )}
      </>
    );
  }
}
// const ChildComponent = (props) => {
//   let { arrJobs } = props;
//   return (
//     <>
//       <div>
//         <div className="job-lists">
//           {arrJobs.map((item, index) => {
//             if (+item.salary >= 500) {
//               return (
//                 <div key={item.id}>
//                   {item.title} - {item.salary}
//                 </div>
//               );
//             }
//           })}
//         </div>
//       </div>
//     </>
//   );
// };
export default ChildComponent;
