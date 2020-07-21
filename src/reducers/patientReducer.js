export const patientState = { patients: [] }
export const patientReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            return state;
        case 'REMOVE_PATIENT':
            return state;
        default:
            return state;
    }
}