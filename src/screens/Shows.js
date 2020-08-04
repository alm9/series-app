import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShowsScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.listStyle}>
        <Text>Lista</Text>
      </View>
      <View style={styles.detailStyle}>
        <Text>Detalhes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    flex: 1,
    marginTop: 25,
  },
  listStyle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgreen',
  },
  detailStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

export default ShowsScreen;
