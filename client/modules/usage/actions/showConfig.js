const SET_CONFIG = 'SET_CONFIG';

// export action creator, which is a function
export const showConfig = config => ({
  type: SET_CONFIG,
  config,
});

const CLEAN_CONFIG = 'CLEAN_CONFIG';

// export action creator, which is a function
export const cleanConfig = () => ({
  type: CLEAN_CONFIG,
});


const SHOW_RANDOM = 'SHOW_RANDOM';

// export action creator, which is a function
export const showRandom = random => ({
  type: SHOW_RANDOM,
  random,
});
