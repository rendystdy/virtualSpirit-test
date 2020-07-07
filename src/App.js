import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {CartItem, Button} from './components';
import {Img1, Img2, Img3} from './assets';

const App = () => {
  const [dataList, setDataList] = useState([
    {id: 1, like: 0, image: Img1},
    {id: 2, like: 0, image: Img2},
    {id: 3, like: 0, image: Img3},
  ]);

  const handleLike = key => {
    const newArray = [...dataList];
    newArray[key].like = dataList[key].like + 1;
    setDataList(newArray);
  };

  const handleDislike = key => {
    const newArray = [...dataList];
    newArray[key].like = dataList[key].like <= 0 ? 0 : dataList[key].like - 1;
    setDataList(newArray);
  };

  const handleResetAll = () => {
    const newArray = [...dataList];
    newArray.map((item, index) => {
      dataList[index].like = 0;
    });

    setDataList(newArray);
  };

  const handleDislikeAll = () => {
    const newArray = [...dataList];
    newArray.map((item, index) => {
      dataList[index].like =
        dataList[index].like <= 0 ? 0 : dataList[index].like - 1;
    });
    setDataList(newArray);
  };

  const handleLikeAll = () => {
    const newArray = [...dataList];
    newArray.map((item, index) => {
      dataList[index].like = dataList[index].like + 1;
    });
    setDataList(newArray);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <Button
          title="Like All"
          color="#2B72C4"
          customBorderRadius={10}
          customHeight={36}
          customWidth={100}
          onPress={handleLikeAll}
        />
        <Button
          title="Reset All"
          color="white"
          textColor="#707070"
          primary
          customBorderRadius={10}
          customHeight={36}
          customWidth={100}
          onPress={handleResetAll}
        />
        <Button
          title="Dislike All"
          color="#DB2C2C"
          customBorderRadius={10}
          customHeight={36}
          customWidth={100}
          onPress={handleDislikeAll}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapperContent}>
          {dataList.map((item, index) => {
            return (
              <CartItem
                key={item.id}
                image={item.image}
                value={item.like}
                onPressLike={() => handleLike(index)}
                onPressDislike={() => handleDislike(index)}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 12,
  },
  wrapperContent: {paddingVertical: 15},
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
});
