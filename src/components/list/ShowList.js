import React from 'react';
import { Text, FlatList, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const shows = {
  items: [
    {
      id: 1,
      nome: 'Zezin tem cada uma',
    },
    {
      id: 2,
      nome: 'Ohhh Vanda',
    },
    {
      id: 3,
      nome: 'Flip escritor',
    },
    {
      id: 4,
      nome: 'i',
    },
    {
      id: 5,
      nome: 'Rex',
    },
    {
      id: 6,
      nome: 'Rock',
    },
    {
      id: 7,
      nome: 'Tom',
    },
  ],
};

export default function ShowList() {
  return (
    <>
      <View style={styles.listStyle}>
        <FlatList
          data={shows.items}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => console.log('Clicou em', item.id)}>
              <View style={styles.buttonStyle}>
                <Text>{item.nome}</Text>
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
