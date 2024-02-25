import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Gradient from './UI/Gradient';
import PlayerCard from './UI/PlayerCard';
import CustomText from './CustomText';
import {useSelector} from 'react-redux';
import {getRemainingCoins} from '../Redux/reducers/gameReducer';

const AIPlayerSide = ({turn}) => {
  const remainingCoins = useSelector(getRemainingCoins);
  return (
    <Gradient
      backgroundColor="#B5C0D0"
      borderBottomLeftRadius={20}
      borderBottomRightRadius={20}
      padding={10}>
      <PlayerCard type="ai" />
      {remainingCoins > 0 && (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          {turn == 'ai' && (
            <>
              <CustomText text={'Analyzing the move'} fontSize={20} />
              <ActivityIndicator size={'large'} />
            </>
          )}
        </View>
      )}
    </Gradient>
  );
};

export default AIPlayerSide;

const styles = StyleSheet.create({});
