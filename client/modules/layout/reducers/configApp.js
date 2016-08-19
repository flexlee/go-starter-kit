const initialState = {
  API_URL: process.env.API_URL,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_CLIENT_DOMAIN: process.env.AUTH0_CLIENT_DOMAIN,
  NODE_ENV: process.env.NODE_ENV,
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
