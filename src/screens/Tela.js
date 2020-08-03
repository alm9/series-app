import React from 'react';
import { StyleSheet, View } from 'react-native';
import Input from '../components/form/Input';

const TelaScreen = () => {
  const [stateNome, setStateNome] = React.useState('');
  return (
    <View style={styles.viewStyle}>
      <Input
        label="Nome"
        onChange={(text) => setStateNome(text)}
        initialValue={''}
      />
      <Input
        label="Busca"
        onChange={(text) => setStateNome(text)}
        initialValue={''}
      />
    </View>
  );
};

export default TelaScreen;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    margin: 15,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
