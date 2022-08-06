import React from 'react';
import {View, Image} from 'react-native';
import logo from '../assets/logo.jpg';

type Props = {
  value: string | number;
  fontSize: number | undefined;
  color: string | undefined;
  fontWeight: string;
  marginBottom: number | undefined;
  marginTop: number | undefined;
  height: number | undefined;
  width: number | undefined;
};

const Logo = ({
  fontSize,
  color,
  fontWeight,
  marginTop,
  marginBottom,
  height,
  width,
}: Props) => {
  const styles = {
    fontSize: fontSize,
    color: color,
    marginTop: marginTop,
    marginBottom: marginBottom,
    fontWeight: fontWeight,
    height: height,
    width: width,
  };
  return (
    <View>
      <Image style={styles} source={logo} />
    </View>
  );
};

export default Logo;
