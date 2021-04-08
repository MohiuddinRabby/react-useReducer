import React, { useContext, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { TodoContext } from "../../contexts/TodoContext/TodoContext";

const initialValues = {
  taskName: "",
};
const Todo = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);
  useEffect(() => {
    dispatch({ type: "GET_TASK_DATA" });
  }, [dispatch]);
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch({
            type: "ADD_TODO",
            payload: {
              id: Math.floor(Math.random() * 20) + 4,
              taskName: values.taskName,
            },
          });
          resetForm();
        }}
      >
        {({ values, setFieldValue, isValid }) => (
          <>
            <Form>
              <div className="container">
                <div className="form-group row py-5">
                  <div className="col-lg-4">
                    <label>Task Name</label>
                    <Field
                      className="form-control"
                      name="taskName"
                      placeholder="User Name"
                      value={values?.taskName}
                    />
                  </div>
                </div>
              </div>
              <br />
              <button
                className="btn btn-primary mt-5"
                type="submit"
                disabled={!isValid}
              >
                Submit
              </button>
            </Form>
          </>
        )}
      </Formik>
      {state?.taskList?.map((task) => (
        <li key={task?.id}>{task?.taskName}</li>
      ))}
    </>
  );
};

export default Todo;
