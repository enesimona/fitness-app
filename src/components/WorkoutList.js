import React, { useState, useEffect } from "react";
import WorkoutForm from "./WorkoutForm";
import firebase from "../firebase";

const WorkoutList = () => {
  var [workouts, setWorkouts] = useState({});
  var [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebase.child("workouts").on("value", (snapshot) => {
      if (snapshot.val() != null)
        //this function will return a collection with objects
        setWorkouts({
          ...snapshot.val(),
        });
      else setWorkouts({});
    });
  }, []); //similar to componentDidMount

  const addOrEdit = (obj) => {
    if (currentId == "")
      firebase.child("workouts").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      firebase.child(`workouts/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this workout?")) {
      firebase.child(`workouts/${id}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">My workouts</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <WorkoutForm
            addOrEdit={addOrEdit}
            currentId={currentId}
            workouts={workouts}
          ></WorkoutForm>
        </div>
        <div className="col-md-7">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Duration</th>
                <th scope="col">Type</th>
                <th scope="col">Exercises</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(workouts).map((id) => {
                return (
                  <tr key={id}>
                    <td>{workouts[id].workoutDuration}</td>
                    <td>{workouts[id].workoutType}</td>
                    <td>{workouts[id].Exercises}</td>
                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => {
                          setCurrentId(id);
                        }}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a
                        className="btn text-danger"
                        onClick={() => {
                          onDelete(id);
                        }}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkoutList;
