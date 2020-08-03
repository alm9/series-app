import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Input = (props) => {
  const [stateValor, setStateValor] = React.useState(props.initialValue);
  const onChange = (text) => {
    setStateValor(text);
    if (!props.onChange) return;
    props.onChange(text);
  };
  return (
    <>
      <View style={styles.viewStyle}>
        <Feather name="search" size={24} color="black" />
        <Text style={styles.textStyle}>{props.label + ':'}</Text>
        <TextInput
          value={stateValor}
          style={styles.textInputStyle}
          onChangeText={onChange}
        />
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 3,
    borderRadius: 50,
  },
  textInputStyle: {
    backgroundColor: 'green',
    color: 'white',
    marginLeft: 15,
  },
  textStyle: {
    color: 'yellow',
    // alignSelf: 'center',
  },
});
