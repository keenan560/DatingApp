import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';

type Props = {
  title: string;
  onPress: (event: any) => void;
  color: string | undefined;
  backgroundColor: string | undefined;
  borderRadius: number | undefined;
  borderWidth: number | undefined;
  fontWeight: string | number | undefined;
  fontSize: number | undefined;
  marginBottom: number | undefined;
  height: number | undefined;
  width: string | number | undefined;
  padding: number | undefined;
  textAlign: string | undefined;
  justifyContent: string | undefined;
  alignItems: string | undefined;
};

const Button = ({
  title,
  onPress,
  color,
  backgroundColor,
  borderRadius,
  borderWidth,
  fontSize,
  fontWeight,
  marginBottom,
  height,
  width,
  padding,
  textAlign,
  justifyContent,
  alignItems,
}: Props) => {
  const styles = {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
    textAlign: textAlign,
    alignItems: alignItems,
  };

  const buttonStyle = {
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    borderWidth: borderWidth,
    marginBottom: marginBottom,
    height: height,
    width: width,
    padding: padding,
    textAlign: textAlign,
    justifyContent: justifyContent,
    alignItems: alignItems,
  };
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={styles}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
