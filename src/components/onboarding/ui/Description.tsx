import Colors from '@/src/constants/Colors';
import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface Props {
  children: string;
  style?: TextStyle;
}

export const StepDescription = ({ children, style }: Props) => <Text style={[styles.description, style]}>{children}</Text>;

const styles = StyleSheet.create({
  description: {
    fontSize: 21,
    color: Colors.light.gray,
    textAlign: 'center',
    lineHeight: 25,
    letterSpacing: 0.3,
    paddingHorizontal: 40,
    marginTop: 15,
    fontWeight: '400',
  },
});
