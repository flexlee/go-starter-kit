const initialState = {
  CONFIG: 'config',
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
    case 'SHOW_RANDOM':
      return {
        ...state,
        CONFIG: action.random,
      };
    default:
      return state;
  }
};
