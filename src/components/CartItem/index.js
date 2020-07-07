import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Button from '../Button';

const CartItem = ({image, value, onPressLike, onPressDislike}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <View style={styles.wrapperButton}>
        <Button
          title={`${value} Like`}
          color="white"
          textColor="#707070"
          primary
          disabled
        />
        <View style={styles.wrap}>
          <Button title="Like" color="#DB2C2C" onPress={onPressLike} />
          <Button title="Dislike" color="#2B72C4" onPress={onPressDislike} />
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 251,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#00000029',
    shadowOpacity: 1,
    elevation: 2,
    overflow: 'hidden',
    marginBottom: 15,
  },
  img: {
    width: 352,
    height: 198,
  },
  wrapperButton: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  wrap: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
