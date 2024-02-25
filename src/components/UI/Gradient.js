import React, {memo} from 'react';
import {View} from 'react-native';

const Gradient = ({children, ...props}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', ...props}}>{children}</View>
  );
};

export default memo(Gradient);
