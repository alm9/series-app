import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Input from '../components/form/Input';
import { AppContext } from '../context/AppContext';

const NewShowScreen = () => {
  const [stateName, setStateName] = React.useState('');
  const [stateCountry, setStateCountry] = React.useState('');
  const [stateGenre, setStateGenre] = React.useState('');
  const [stateThumbnail, setStateThumbnail] = React.useState('');
  const { dispatch } = React.useContext(AppContext);

  const salvar = () => {
    const action = {
      type: 'addItemSelected',
      payload: {
        name: stateName,
        country: stateCountry,
        genre: stateGenre,
        image_thumbnail_path: stateThumbnail,
      },
    };
    dispatch(action);
  };

  return (
    <>
      <View style={styles.newShowView}>
        <Text style={styles.newShowText}>Cadastrar Seriado:</Text>
        <Input
          label={'Nome'}
          initialValue={''}
          onChange={(text) => setStateName(text)}
        />
        <Input
          label={'País'}
          initialValue={''}
          onChange={(text) => setStateCountry(text)}
        />
        <Input
          label={'Rede'}
          initialValue={''}
          onChange={(text) => setStateGenre(text)}
        />
        <Input
          label={'Thumbnail'}
          initialValue={''}
          onChange={(text) => setStateThumbnail(text)}
        />
        <Button title={'Salvar'} onPress={() => salvar()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  newShowView: {
    flex: 1,
    marginTop: 22,
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  newShowText: {
    // flex: 1,
    backgroundColor: 'red',
    color: 'white',
  },
});

export default NewShowScreen;
