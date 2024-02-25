import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Gradient from '../components/UI/Gradient';
import {useDispatch, useSelector} from 'react-redux';
import {getHistory, setRemainingCoins} from '../Redux/reducers/gameReducer';
import HistoryCard from '../components/HistoryCard';
import CustomText from '../components/CustomText';
import CustomButton from '../components/UI/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {screenContants} from '../components/constants';

const HistoryScreen = () => {
  const historyList = useSelector(getHistory);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  console.log({historyList});
  const renderCard = ({item}) => {
    return <HistoryCard item={item} />;
  };
  const handlePlay = () => {
    dispatch(setRemainingCoins(21));
    navigation.navigate(screenContants.GAME);
  };
  return (
    <Gradient padding={10}>
      <CustomText text={'Games History'} heading />
      {historyList?.length > 0 ? (
        <FlatList data={historyList} renderItem={renderCard} />
      ) : (
        <View>
          <CustomText text={'0 games played yet'} />
          <CustomButton title={'Play Game'} onPress={handlePlay} />
        </View>
      )}
    </Gradient>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({});
