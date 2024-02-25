import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const CustomText = ({text, heading, tint, ...props}) => {
  return (
    <Text
      style={[
        styles.text,
        {
          fontWeight: heading ? 800 : 500,
          fontSize: heading ? 18 : 14,
          color: tint ? 'grey' : 'black',
          ...props,
        },
      ]}>
      {text}
    </Text>
  );
};

export default CustomText;
export const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'black',
    marginVertical: 2,
  },
});
