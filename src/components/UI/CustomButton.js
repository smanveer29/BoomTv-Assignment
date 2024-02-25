import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from '../CustomText';
import {screen} from '../constants';

const CustomButton = ({title, onPress, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 10,
        marginVertical: 5,
        backgroundColor: 'black',
        borderRadius: 10,
        // minWidth: screen.width / 2,
        alignItems: 'center',
        justifyContent: 'center',
        ...props,
      }}>
      <CustomText text={title} color={'#fff'} />
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
