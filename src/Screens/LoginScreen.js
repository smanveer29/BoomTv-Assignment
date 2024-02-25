import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import Gradient from '../components/UI/Gradient';
import CustomText from '../components/CustomText';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthUsersList, setUserData} from '../Redux/reducers/userReducer';
import {getAsyncStorageData, storeData} from '../Middleware/AsyncStorage';
import CustomButton from '../components/UI/CustomButton';
import {screenContants, storageConst} from '../components/constants';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const authUsers = useSelector(getAuthUsersList);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const authUser = async () => {
    const user = await getAsyncStorageData(storageConst.STORAGE_KEY_USER);
    if (user) {
      dispatch(setUserData(user));
      setTimeout(() => {
        setLoading(false);
        navigation.reset({index: 0, routes: [{name: screenContants.GAME}]});
      }, 1000);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useMemo(() => {
    authUser();
  }, []);
  const [data, setData] = useState({
    username: 'admin',
    password: 'admin1234',
  });
  const list = [
    {
      placeholder: 'UserName',
      value: 'username',
    },
    {
      placeholder: 'Password',
      value: 'password',
      inputProps: {
        secureTextEntry: true,
      },
    },
  ];
  const handleLogin = () => {
    const validUser = authUsers?.find(e => {
      console.log({e});
      if (e?.username === data?.username && e?.password === data?.password) {
        return e;
      }
    });
    if (validUser) {
      console.log('valid USer', validUser);
      storeData(storageConst.STORAGE_KEY_USER, validUser);
      dispatch(setUserData(validUser));
      navigation.reset({index: 0, routes: [{name: screenContants.GAME}]});
    } else {
      alert('Invalid Credentials');
    }
  };
  if (loading)
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  return (
    <Gradient padding={10} alignItems="center" justifyContent={'center'}>
      <CustomText text={`AI - The Mobile App`} heading />
      {list?.map((item, i) => (
        <TextInput
          {...item?.inputProps}
          key={i}
          value={data[item?.value]}
          style={styles.input}
          onChangeText={e => setData({...data, [item?.value]: e})}
          placeholder={item?.placeholder}
        />
      ))}
      <CustomButton title={'Login'} onPress={handleLogin} />
    </Gradient>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  cont: {flex: 1},
  input: {
    margin: 10,
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
