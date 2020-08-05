import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { AppContext } from '../../context/AppContext';

const ShowDetail = () => {
  const { state } = React.useContext(AppContext);

  // console.info('state.showList.length:', state.showList.length);
  // if (state.showList.length === 0) return <></>;

  const details = state.showList.find((item) => item.id === state.itemSelected);

  return (
    <>
      {details !== undefined && (
        <View style={styles.parent}>
          <View style={styles.viewStyle}>
            <Text>Nome: {details.name}</Text>
            <Text>País: {details.country}</Text>
            <Text>Gênero: {details.genre}</Text>
            <Image
              resizeMode="contain"
              style={styles.pictureStyle}
              source={{ uri: details.image_thumbnail_path }}
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
