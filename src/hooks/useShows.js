//tratar o que vem de shows
import show from '../api/show';
import React from 'react';
import { AppContext } from '../context/AppContext';

export const useShows = () => {
  // const [stateShows, setStateShows] = React.useState(null);
  const { state, dispatch } = React.useContext(AppContext);

  React.useEffect(() => {
    show.get('/shows').then((response) => {
      // setStateShows(response.data);
      const action = { type: 'createList', payload: response.data };
      dispatch(action);
    });
  }, []);

  return { shows: state.showList };
};
