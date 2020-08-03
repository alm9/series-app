import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.viewStyle}>
      <Text>Tela</Text>
      <Button
        title={'Faça a navegação'}
        onPress={() => navigation.navigate('Tela')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    margin: 15,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
