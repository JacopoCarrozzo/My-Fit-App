import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import Colors from '@/src/constants/Colors';

interface Props {
  children: string;
  style?: TextStyle;
}

export const StepTitle = ({ children, style }: Props) => <Text style={[styles.title, style]}>{children}</Text>;

const styles = StyleSheet.create({
  title: {
    fontSize: 27,
    textAlign: 'center',
    color: Colors.light.black,
    lineHeight: 34,
    marginTop: 40,
    marginBottom: 40,
    fontWeight: '800',
  },
});
