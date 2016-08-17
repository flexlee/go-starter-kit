const initialState = {
  API_URL: process.env.API_URL,
};

export const configApp = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return {
        ...state,
      };
    default:
      return state;
  }
};
