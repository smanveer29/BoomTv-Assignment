import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Gradient from './UI/Gradient';
import {useDispatch, useSelector} from 'react-redux';
import {
  getRemainingCoins,
  setRemainingCoins,
} from '../Redux/reducers/gameReducer';
import CustomText from './CustomText';
import CustomButton from './UI/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {screenContants} from './constants';

const CoinsUI = ({turnHistory}) => {
  const remainingCoins = useSelector(getRemainingCoins);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const resetGame = () => {
    dispatch(setRemainingCoins(21));
  };
  const goToHistory = () => {
    navigation.navigate(screenContants.HISTORY);
  };
  return (
    <Gradient justifyContent="center" padding={10}>
      <CustomText text={`Remaining: ${remainingCoins}`} />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {remainingCoins > 0 ? (
          Array(remainingCoins).fill(1)?.length > 0 &&
          Array(remainingCoins)
            .fill(1)
            ?.map((_, i) => (
              <Image
                key={i}
                source={require('../assets/Images/coin.png')}
                style={styles.coin}
              />
            ))
        ) : (
          <View style={{alignItems: 'center'}}>
            <CustomText text={'Game Finished!'} color="green" heading />
            <CustomText
              text={`YOU ${
                turnHistory[turnHistory.length - 1] === 'human'
                  ? 'LOOSE'
                  : 'WIN'
              }`}
              heading
              color={
                turnHistory[turnHistory.length - 1] === 'human'
                  ? 'red'
                  : 'green'
              }
            />
            <View style={{flexDirection: 'row'}}>
              <CustomButton
                marginHorizontal={10}
                title="Play Again"
                backgroundColor="green"
                onPress={resetGame}
              />
              <CustomButton
                title="Go To History"
                marginHorizontal={10}
                onPress={goToHistory}
              />
            </View>
          </View>
        )}
      </View>
    </Gradient>
  );
};

export default CoinsUI;

const styles = StyleSheet.create({
  coin: {width: 40, height: 40, marginHorizontal: 3},
});
