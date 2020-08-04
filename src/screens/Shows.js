import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ShowList from '../components/list/ShowList';
import ShowDetail from '../components/detail/ShowDetail';

const ShowsScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.listStyle}>
        <ShowList />
      </View>
      <View style={styles.detailStyle}>
        <ShowDetail />
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
