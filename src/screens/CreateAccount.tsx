import React, {useState} from 'react';
import styles from './CreateAccountStyles';
import {View, Dimensions, ScrollView} from 'react-native';
import {Input, Header, AddressInput} from '../components';
import DropDownPicker from 'react-native-dropdown-picker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CreateAccount: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password1, setPassword1] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState<{}[]>([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header value="Enter details" fontSize={24} />

        <Input
          onChangeText={text => setFirstName(text)}
          value={firstName}
          placeholder="First name"
        />
        <Input
          onChangeText={text => setLastName(text)}
          value={lastName}
          placeholder="Last name"
        />
        <DropDownPicker
          containerStyle={{
            alignItems: 'center',
            marginBottom: 24,
            width: windowWidth * 0.9,
          }}
          labelStyle={{fontWeight: 'normal'}}
          style={{width: windowWidth * 0.9, borderRadius: 5, borderWidth: 0.4}}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <AddressInput />
        <Input
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="Email"
        />
        <Input
          onChangeText={text => setPassword1(text)}
          value={password1}
          placeholder="Password"
        />
        <Input
          onChangeText={text => setPassword2(text)}
          value={password2}
          placeholder="Re-enter password"
        />
      </ScrollView>
    </View>
  );
};

export default CreateAccount;
