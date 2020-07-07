import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({
  title,
  color,
  textColor,
  primary,
  customBorderRadius,
  customHeight,
  customWidth,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={styles.container(
        color,
        primary,
        customBorderRadius,
        customHeight,
        customWidth,
      )}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text(textColor)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (
    color,
    primary,
    customBorderRadius,
    customHeight,
    customWidth,
  ) => ({
    height: customHeight ? customHeight : 30,
    width: customWidth ? customWidth : null,
    backgroundColor: color,
    borderRadius: customBorderRadius ? customBorderRadius : 5,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: primary ? 1 : 0,
    borderColor: '#D5D5D5',
  }),
  text: textColor => ({
    color: textColor ? textColor : 'white',
    textAlign: 'center',
    fontSize: 16,
  }),
});
