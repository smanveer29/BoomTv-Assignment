import {View, Text, ToastAndroid} from 'react-native';
import React, {useMemo, useState} from 'react';
import Gradient from '../components/UI/Gradient';
import CustomText from '../components/CustomText';
import {useDispatch, useSelector} from 'react-redux';
import {
  getRemainingCoins,
  setHistory,
  setRemainingCoins,
} from '../Redux/reducers/gameReducer';
import AIPlayerSide from '../components/AIPlayerSide';
import HumanPlayer from '../components/HumanPlayer';
import CoinsUI from '../components/CoinsUI';
import {storeData} from '../Middleware/AsyncStorage';

const GameScreen = () => {
  const remainingCoins = useSelector(getRemainingCoins);
  const [turn, setTurn] = useState('human');
  const [turnHistory, setTurnsHistory] = useState([]);
  const dispatch = useDispatch();
  const aiLogic = () => {
    // there are 21 coins so for ai to pick there should be one remainder left for user to pick i.e odd values should be alloted to human to pick

    // So to left remainder one the AI should pick value which left remainder of some odd number between 1 - remainingCoins
    // For that logic we have to check that if AI choose number so that it gives reaminder as 1 or any odd value for human to pick next time

    // For AI to pick there is logic depending on scenarois as:
    //
    if (remainingCoins > 5) {
      // Choose value between 1 and 3
      return Math.floor(Math.random() * 3) + 1;
    } else {
      if (remainingCoins === 5) return 4;
      else if (remainingCoins === 4) return 3;
      else if (remainingCoins === 3) return 2;
      else return 1;
    }
  };
  useMemo(() => {
    if (remainingCoins === 21) {
      setTurn('human');
      setTurnsHistory([]);
    }
    if (remainingCoins === 0) {
      dispatch(
        setHistory({
          ai: turnHistory[turnHistory.length - 1] === 'human' ? 1 : 0,
          human: turnHistory[turnHistory.length - 1] === 'human' ? 0 : 1,
        }),
      );
    }
  }, [remainingCoins]);

  useMemo(async () => {
    if (remainingCoins === 0) {
      return;
    }
    if (turn) setTurnsHistory(prev => [...prev, turn]);
    if (turn === 'ai' && remainingCoins > 0) {
      const value = await aiLogic();
      setTimeout(() => {
        dispatch(setRemainingCoins(remainingCoins - value));
        ToastAndroid.show(`AI picked ${value} coins`, ToastAndroid.LONG);
        setTurn('human');
      }, 2000);
    }
  }, [turn]);

  return (
    <Gradient justifyContent="space-between">
      <AIPlayerSide turn={turn} />
      <CoinsUI turnHistory={turnHistory} />
      <HumanPlayer
        turn={turn}
        toggleTurn={() => {
          if (remainingCoins > 0) setTurn('ai');
          else setTurn('human');
        }}
      />
    </Gradient>
  );
};

export default GameScreen;
