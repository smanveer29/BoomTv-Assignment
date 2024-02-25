import React, {useState, useEffect, useRef} from 'react';
import {Dimensions, FlatList, Pressable, Text, View} from 'react-native';

const Carousel = ({
  data,
  itemWidth = Dimensions.get('screen').width * 0.75,
  spacing = 15,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = useRef(null);
  const itemWidthWithSpacing = itemWidth + spacing;

  const snapToItem = index => {
    flatlistRef.current.scrollToIndex({index, animated: true});
    setCurrentIndex(index);
  };

  const handleScroll = event => {
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / itemWidthWithSpacing);
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          snapToItem(index);
        }}
        style={{
          width: itemWidth,
          marginHorizontal: spacing / 2,
          borderWidth: 1,
        }}>
        <Text>hello {index}</Text>
      </Pressable>
    );
  };

  useEffect(() => {
    snapToItem(0);
  }, []);

  return (
    <View style={{flexDirection: 'row'}}>
      <FlatList
        ref={flatlistRef}
        data={Array(5).fill({title: '222'}) || data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemWidthWithSpacing}
        onScroll={handleScroll}
      />
    </View>
  );
};

export default Carousel;
