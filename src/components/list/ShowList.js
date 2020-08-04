import React from 'react';
import { Text, FlatList, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useShows } from '../../hooks/useShows';
import { AppContext } from '../../context/AppContext';

export default function ShowList() {
  const { shows } = useShows();
  const { dispatch } = React.useContext(AppContext);
  return (
    <>
      <View style={styles.listStyle}>
        <FlatList
          data={shows}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                dispatch({ type: 'setItemSelected', payload: item.id })
              }
            >
              <View style={styles.buttonStyle}>
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: 'darkgray',
  },
  listStyle: {
    marginTop: 50,
  },
});
