import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

const Spinner = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={'small'} />
    </View>
  );
};

export default Spinner;
