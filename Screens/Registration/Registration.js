import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Style/RegistrationStyle';
import {
  LoginImg,
  UserImg,
  GoogleImg,
  AppleImg,
  FacebookImg,
  PasswordImg,
  InboxImg,
} from '../../theme/Images';
import Icon from '../../src/components/common/icon';

export default function Registration({navigation}) {
  const initialInputs = {
    firstName: { label: 'First Name', value: '' },
        lastName: { label: 'Last Name', value: '' },
    username: {label: 'Username', value: ''},
    email: {label: 'Email', value: ''},
    password: {label: 'Password', value: ''},
  };
  const [state, setState] = useState({
    ...initialInputs,
    page: 'Sign up',
  });
  const {page} = state;
  const gotToSignin = () => {
    setState({
      ...state,
      page: page === 'Sign up' ? 'Login' : 'Sign up',
    });
  };
  const displayInputs =
    page === 'Sign up'
      ? ['firstName', 'lastName','username', 'email', 'password']
      : ['email', 'password'];
  return (
    <View style={styles.loginContainer}>
      <SafeAreaView />
      <Image source={LoginImg} style={styles.loginImg} />
      <View style={styles.mainContainer}>
        <Text style={styles.welComeText}>
          {page === 'Sign up' ? 'Sign up' : 'Login'}
        </Text>
        {displayInputs.map((input, index) => (
          <View key={index} style={styles.loginInputView}>
            <TextInput placeholder={input} style={styles.loginInput} />
          </View>
        ))}
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>
            {page === 'Sign up' ? 'Sign Up' : 'Login'}
          </Text>
        </TouchableOpacity>
        <Text style={styles.contiueText}>or contiue with</Text>
      </View>
      <View style={styles.socialView}>
        <View style={styles.bgImg}>
          <Image source={GoogleImg} style={styles.socialImg} />
        </View>
        <View style={styles.bgImg}>
          <Image source={AppleImg} style={styles.socialImg} />
        </View>
        <View style={styles.bgImg}>
          <Image source={FacebookImg} style={styles.socialImg} />
        </View>
      </View>
      <TouchableOpacity onPress={gotToSignin}>
        <Text style={styles.signupText}>
          {page === 'Sign up'
            ? 'Allready have an account? Sign in'
            : 'Do not have an account? Sign up'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
