import React from "react";

const Workout = (props) => {
  return (
    <tr>
      <td>{props.workoutDuration}</td>
      <td>{props.workoutType}</td>
      <td>{props.exercises}</td>
      <td>
        <a className="btn text-primary">
          <i className="fas fa-pencil-alt"></i>
        </a>
        <a className="btn btn-danger">
          <i className="fas fa-trash-alt"></i>
        </a>
      </td>
    </tr>
  );
};

export default Workout;
