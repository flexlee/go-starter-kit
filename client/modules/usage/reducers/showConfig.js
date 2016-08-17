const initialState = {
  CONFIG: '',
};

export const showConfig = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONFIG':
      return {
        ...state,
        CONFIG: action.config,
      };
    case 'CLEAN_CONFIG':
      return {
        ...state,
        CONFIG: '',
      };
    default:
      return state;
  }
};
