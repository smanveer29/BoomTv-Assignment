import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Gradient from './UI/Gradient';
import {useDispatch, useSelector} from 'react-redux';
import {getUserData} from '../Redux/reducers/userReducer';
import CustomButton from './UI/CustomButton';
import {
  getRemainingCoins,
  setRemainingCoins,
} from '../Redux/reducers/gameReducer';
import {screen} from './constants';
import PlayerCard from './UI/PlayerCard';
import CustomText from './CustomText';

const HumanPlayer = ({turn, toggleTurn}) => {
  const user = useSelector(getUserData);
  const remainingCoins = useSelector(getRemainingCoins);
  const dispatch = useDispatch();
  const handlePick = value => {
    if (remainingCoins - value >= 0) {
      dispatch(setRemainingCoins(remainingCoins - value));
    }
    toggleTurn();
  };
  return (
    <Gradient
      backgroundColor="#F2858590"
      borderTopLeftRadius={20}
      borderTopRightRadius={20}
      padding={10}>
      <PlayerCard name={user?.username} type="human" />
      {remainingCoins === 0 ? null : turn === 'ai' ? (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <CustomText text={'AI is choosing wait.....'} heading />
        </View>
      ) : (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <CustomText text={`Your Turn to pick`} heading />
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {[1, 2, 3, 4]?.map((item, i) => (
              <CustomButton
                width={screen.width / 5}
                height={50}
                margin={2}
                backgroundColor="green"
                key={i}
                title={item}
                onPress={() => handlePick(item)}
              />
            ))}
          </View>
        </View>
      )}
    </Gradient>
  );
};

export default HumanPlayer;

const styles = StyleSheet.create({});
