const initialState = {
  CONFIG: null,
};

const showConfig = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONFIG':
      return {
        ...state,
        CONFIG: action.config,
      };
    default:
      return state;
  }
};

export default showConfig;
