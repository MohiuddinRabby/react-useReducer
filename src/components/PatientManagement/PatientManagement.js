import React from 'react';
import { useReducer } from 'react';
import { patientReducer, patientState } from '../../reducers/patientReducer';


const PatientManagement = () => {
    const [state, dispatch] = useReducer(patientReducer, patientState);
    return (
        <div>
            <h2>Patient Management : {state.patients.length}</h2>
        </div>
    );
};

export default PatientManagement;