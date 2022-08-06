import React, {useState} from 'react';
import styles from './LoginStyles';
import {View, Dimensions} from 'react-native';
import {Input, Header, Button, Logo} from '../components';
import {useNavigation} from '@react-navigation/native';
import packjson from '../../package.json';

interface Login {
  email: string;
  password: string;
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const env = process.env.NODE_ENV;

const Welcome: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<Login['email']>('');
  const [password, setPassword] = useState<Login['password']>('');
  return (
    <View style={styles.container}>
      <Logo
        marginTop={75}
        marginBottom={24}
        height={windowHeight * 0.25}
        width={windowWidth * 0.9}
      />
      <Input
        placeholder="Email"
        borderColor="#000"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Input
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <View style={{left: -windowWidth * 0.28}}>
        <Button
          title="Need an account?"
          onPress={() => navigation.navigate('create')}
          marginBottom={24}
          color="#FF9FBE"
          fontWeight="bold"
          alignItems="flex-start"
          justifyContent="flex-start"
        />
      </View>
      <Button
        title="Login"
        onPress={() => navigation.navigate('create')}
        fontWeight="bold"
        fontSize={16}
        backgroundColor="#43c6fb"
        color="#fff"
        textAlign="center"
        justifyContent="center"
        padding={0}
        width={windowWidth * 0.9}
        height={50}
        borderRadius={5}
        marginBottom={24}
      />
      <Header
        value={`v${packjson.version}(${
          env === 'development' ? 'dev' : 'prod'
        })`}
      />
    </View>
  );
};
export default Welcome;
