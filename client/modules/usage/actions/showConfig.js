export const SET_CONFIG = 'SET_CONFIG';
export const CLEAN_CONFIG = 'CLEAN_CONFIG';
export const SHOW_RANDOM = 'SHOW_RANDOM';

// export action creator, which is a function
export const showConfig = config => ({
  type: SET_CONFIG,
  config,
});

// export action creator, which is a function
export const cleanConfig = () => ({
  type: CLEAN_CONFIG,
});


// export action creator, which is a function
export const showRandom = random => ({
  type: SHOW_RANDOM,
  random,
});

// redux thunk action creators
export function cleanConfigClick() {
  return dispatch => dispatch(cleanConfig());
}

export function loadRandomClick() {
  return (dispatch) => {
    const API_URL = process.env.API_URL;
    const request = {
      method: 'GET',
      // headers: {
      //   Authorization: `Bearer ${key}`,
      // },
    };
    fetch(API_URL, request)
      .then(response => response.json())
      .then(json => {
        dispatch(showRandom(json));
      });
  };
}

export function loadConfigClick() {
  return (dispatch) => {
    fetch('/api/v1/conf')
      .then(response => response.json())
      .then(json => {
        dispatch(showConfig(json));
      });
  };
}
