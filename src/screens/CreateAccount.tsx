import React from 'react';
import styles from './CreateAccountStyles';
import {View, Text, TextInput} from 'react-native';

interface CreateAccountTypes {
  firstName: string;
  lastName: string;
  email: string;
  password1: string;
  password2: string;
}
const CreateAccount: React.FC = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Create</Text>
    </View>
  );
};

export default CreateAccount;
