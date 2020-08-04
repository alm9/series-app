import React from 'react';
import { Text, FlatList, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import show from '../../api/show';

export default function ShowList() {
  const [listState, setListState] = React.useState(null);

  React.useEffect(() => {
    console.info('useEff');
    show.get('/shows').then((response) => {
      console.info('response.data', response.data);
      setListState(response.data);
    });
  }, []);

  console.log('listState:', listState);
  //const shows = {items: [{ id: 11, name: 'Machado' }],};

  return (
    <>
      <View style={styles.listStyle}>
        <FlatList
          // data={shows.items}
          data={listState}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => console.log('Clicou em', item.id)}>
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
