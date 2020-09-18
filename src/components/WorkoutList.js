import React, { useState, useEffect } from "react";
import WorkoutForm from "./WorkoutForm";
import Workout from "./Workout";
import firebase from "../firebase";

const WorkoutList = () => {
  var [workouts, setWorkouts] = useState({});

  useEffect(() => {
    firebase.child("workouts").on("value", (snapshot) => {
      if (snapshot.val() != null)
        //this function will return a collection with objects
        setWorkouts({
          ...snapshot.val(),
        });
    });
  }, []); //similar to componentDidMount

  const addOrEdit = (obj) => {
    firebase.child("workouts").push(obj, (err) => {
      if (err) console.log(err);
    });
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
          <WorkoutForm addOrEdit={addOrEdit}></WorkoutForm>
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
              {Object.keys(workouts).map((id) => (
                <Workout
                  key={id}
                  workoutDuration={workouts[id].workoutDuration}
                  workoutType={workouts[id].workoutType}
                  exercises={workouts[id].Exercises}
                ></Workout>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkoutList;
