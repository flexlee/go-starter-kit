const SET_CONFIG = 'SET_CONFIG';

// export action creator, which is a function
export const showConfig = config => ({
  type: SET_CONFIG,
  config,
});
