import React, { useState, useEffect } from "react";

const WorkoutForm = (props) => {
  const initialFieldValues = {
    workoutDuration: "",
    workoutType: "Cardio",
    Exercises: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    console.log("------" + props.currentId);
    if (props.currentId == "") {
      setValues({
        ...initialFieldValues,
      });
      console.log("Here1");
    } else {
      setValues({
        ...props.workouts[props.currentId],
      });
      console.log("Here2");
    }
  }, [props.currentId, props.workouts]); //se apeleaza cand se schimba stateul celor 2

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    //SAU
    // const target = e.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    // const name = target.name;
    // setValues({
    //   [name]: value,
    // });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
    console.log(values);
  };

  return (
    <div className="workout-form">
      <h3>Create workout</h3>
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Duration</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="30 min"
            value={values.workoutDuration}
            name="workoutDuration"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Type</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            value={values.workoutType}
            name="workoutType"
            onChange={handleInputChange}
          >
            <option>Cardio</option>
            <option>Strength</option>
            <option>Stretch</option>
          </select>
        </div>

        <div className="form-group">
          <label>Exercises</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={values.Exercises}
            name="Exercises"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value={props.currentId == "" ? "Save" : "Update"}
            className="btn btn-primary btn-block"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default WorkoutForm;
