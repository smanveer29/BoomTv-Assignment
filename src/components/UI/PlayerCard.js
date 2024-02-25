import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../CustomText';
import {useSelector} from 'react-redux';
import {getUserData} from '../../Redux/reducers/userReducer';

const PlayerCard = ({type = 'human'}) => {
  const data = useSelector(getUserData);
  return (
    <View style={styles.cont}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={
            type === 'human'
              ? require(`../../assets/Images/user.png`)
              : require(`../../assets/Images/Bot.png`)
          }
          style={styles.image}
        />
        <CustomText
          marginHorizontal={10}
          textTransform="uppercase"
          text={type == 'human' ? data?.username : 'AI'}
          heading
          fontSize={24}
        />
      </View>
    </View>
  );
};

export default PlayerCard;

const styles = StyleSheet.create({
  cont: {
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    padding: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 30,
  },
});
