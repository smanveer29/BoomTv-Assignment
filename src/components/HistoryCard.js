import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlayerCard from './UI/PlayerCard';
import CustomText from './CustomText';

const HistoryCard = ({item}) => {
  return (
    <View style={styles.card}>
      <PlayerCard type="human" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CustomText heading text={`${item?.human}  |  ${item?.ai}`} />
      </View>
      <PlayerCard type="ai" />
    </View>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    margin: 20,
    borderRadius: 10,
  },
});
