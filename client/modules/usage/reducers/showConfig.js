const initialState = {};

export const showConfig = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONFIG':
      return {
        ...state,
        config: action.config,
      };
    case 'CLEAN_CONFIG':
      return {
        ...state,
        config: '',
      };
    case 'SHOW_RANDOM':
      return {
        ...state,
        config: action.random,
      };
    default:
      return state;
  }
};
