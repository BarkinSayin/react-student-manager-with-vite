export const initialState = {
  studentInput: {
    studentName: "",
    course: "",
    instructor: "",
  },
  errors: {
    nameError: false,
    courseError: false,
    instructorError: false,
  },
};

export const formReduce = (state, action) => {
  switch (action.type) {
    case "errorStatus":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.name]: action.payload.value,
        },
      };
    case "inputStatus":
      return {
        ...state,
        studentInput: {
          ...state.studentInput,
          [action.payload.name]: action.payload.value,
        },
      };
    case "resetStatus":
      return initialState;

    default:
      return state;
  }
};
