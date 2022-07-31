import React from 'react';
import {View, TextInput, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

type Props = {
  value: string | undefined;
  onChangeText: (text: string) => void | undefined;
  placeholder: string;
  placeholderTextColor: string;
  secureTextEntry: boolean;
  borderColor: string;
};

const Input = ({
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  borderColor,
}: Props): JSX.Element => {
  const styles = {
    width: windowWidth * 0.9,
    height: 50,
    borderWidth: 0.4,
    paddingLeft: 8,
    borderColor: borderColor,
    borderRadius: 5,
    marginBottom: 24,
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
