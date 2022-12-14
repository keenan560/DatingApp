import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  value: string | number;
  fontSize: number | undefined;
  color: string | undefined;
  fontWeight: string;
  marginBottom: number | undefined;
  marginTop: number | undefined;
};

const Header = ({
  value,
  fontSize,
  color,
  fontWeight,
  marginBottom,
  marginTop,
}: Props) => {
  const styles = {
    fontSize: fontSize,
    color: color,
    fontWeight: fontWeight,
    marginBottom: marginBottom,
    marginTop: marginTop,
  };
  return (
    <View>
      <Text style={styles}>{value}</Text>
    </View>
  );
};

export default Header;
