//tratar o que vem de shows
import show from '../api/show';
import React from 'react';

export const useShows = () => {
  const [stateShows, setStateShows] = React.useState(null);

  React.useEffect(() => {
    console.info('useEff');
    show.get('/shows').then((response) => {
      setStateShows(response.data);
    });
  }, []);

  return { shows: stateShows };
};
