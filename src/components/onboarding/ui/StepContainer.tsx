import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

interface Props {
  children: React.ReactNode;
}

export const StepContainer = ({ children }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
  },
});
