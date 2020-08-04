import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewShowScreen = () => {
  return (
    <>
      <View style={styles.newShowView}>
        <Text style={styles.newShowText}>New Show</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  newShowView: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newShowText: {
    // flex: 1,
    backgroundColor: 'red',
    color: 'white',
  },
});

export default NewShowScreen;
