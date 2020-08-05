import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { AppContext } from '../../context/AppContext';

const ShowDetail = () => {
  const { state } = React.useContext(AppContext);
  const { name, country, genre, image_thumbnail_path } = state.itemSelected
    ? state.showList.find((item) => item.id === state.itemSelected)
    : { name: '', country: '', genre: '', image_thumbnail_path: '' };

  return (
    <>
      {state.itemSelected !== undefined && (
        <View style={styles.parent}>
          <View style={styles.viewStyle}>
            <Text>Nome: {name}</Text>
            <Text>País: {country}</Text>
            <Text>Gênero: {genre}</Text>
            <Image
              resizeMode="contain"
              style={styles.pictureStyle}
              source={{ uri: image_thumbnail_path }}
            />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    // flexDirection: 'column',
    // alignContent: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'red',
  },
  viewStyle: {
    backgroundColor: 'darkgreen',
    alignItems: 'center',
  },
  pictureStyle: {
    height: 230,
    width: 230,
  },
});

export default ShowDetail;
