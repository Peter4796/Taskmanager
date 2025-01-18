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
import {styles} from './Style/authStyle';
import {
  LoginImg,
  UserImg,
  GoogleImg,
  AppleImg,
  FacebookImg,
  PasswordImg,
  InboxImg,
} from '../../theme/Images';

export default function Auth({navigation}) {
  const initialInputs = {
    firstName: {label: 'First Name', value: ''},
    lastName: {label: 'Last Name', value: ''},
    username: {label: 'Username', value: ''},
    email: {label: 'Email', value: ''},
    password: {label: 'Password', value: ''},
  };
  const [state, setState] = useState({
    inputs: [
      {
        placeholder: 'First Name',
        value: 'Peter',
        field: 'firstName',
        error: null,
      },
      {
        placeholder: 'Last Name',
        value: 'Gitahi',
        field: 'lastName',
        error: null,
      },
      {
        placeholder: 'Username',
        value: 'Peter4796',
        field: 'username',
        error: null,
      },
      {
        placeholder: 'Email',
        value: 'Peter4796@gmail.com',
        field: 'email',
        error: null,
      },
      {placeholder: 'Password', value: '', field: 'password', error: null},
    ],
    page: 'Sign up',
  });
  const {page, inputs} = state;
  const gotToSignin = () => {
    setState({
      ...state,
      page: page === 'Sign up' ? 'Login' : 'Sign up',
    });
  };
  const setInputs =
    page === 'Sign up'
      ? ['firstName', 'lastName', 'username', 'email', 'password']
      : ['email', 'password'];
  const displayInputs = inputs.filter(input => setInputs.includes(input.field));
  return (
    <View style={styles.loginContainer}>
      <SafeAreaView />
      <Image source={LoginImg} style={styles.loginImg} />
      <View style={styles.mainContainer}>
        <Text style={styles.welComeText}>
          {page === 'Sign up' ? 'Sign up' : 'Login'}
        </Text>
        {displayInputs.map(({placeholder, value, field, error}, index) => (
          <View key={index} style={styles.loginInputView}>
            <TextInput
              placeholder={
                field === 'email' && page === 'Login'
                  ? 'Email or Username'
                  : placeholder
              }
              placeholderTextColor="black"
              style={styles.loginInput}
            />
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
