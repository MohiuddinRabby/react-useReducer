import React, { useRef } from "react";
import { useReducer } from "react";
import { patientReducer, patientState } from "../../reducers/patientReducer";

const PatientManagement = () => {
  const nameRef = useRef();
  const [state, dispatch] = useReducer(patientReducer, patientState);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_PATIENT",
      name: nameRef.current.value,
      id: state.patients.length + 1,
    });
    nameRef.current.value = "";
  };
  return (
    <div>
      <h2>Patient Management : {state.patients.length}</h2>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} />
      </form>
      {state.patients.map((pt) => (
        <li
          key={pt.id}
          onClick={() => dispatch({ type: "REMOVE_PATIENT", id: pt.id })}
        >
          {pt.name} <button>X</button>
        </li>
      ))}
    </div>
  );
};

export default PatientManagement;
