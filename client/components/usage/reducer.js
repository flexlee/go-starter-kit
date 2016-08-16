import { SET_CONFIG } from '../../actions';

const initialState = {
  CONFIG: null,
};

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFIG:
      return {
        ...state,
        CONFIG: action.config,
      };
    default:
      return state;
  }
};

export default configReducer;
