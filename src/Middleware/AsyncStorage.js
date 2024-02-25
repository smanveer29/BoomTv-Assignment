import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, data) => {
  const jsonData = await JSON.stringify(data);
  await AsyncStorage.setItem(key, jsonData).catch(e => console.log(e));
};

export const getAsyncStorageData = async key => {
  const jsonData = await AsyncStorage.getItem(key);
  return jsonData != null ? JSON.parse(jsonData) : null;
};

export const mergeAsyncStorageData = async (key, data) => {
  const jsonData = await JSON.stringify(data);
  await AsyncStorage.mergeItem(key, jsonData).catch(e => console.log(e));
};

export const removeData = async key => {
  await AsyncStorage.removeItem(key).catch(e => console.log(e));
};
