import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

interface Props {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar = ({ currentStep, totalSteps }: Props) => {
  const progress = Math.min(Math.max((currentStep / totalSteps) * 100, 0), 100);

  return (
    <View style={styles.progressBarBackground}>
      <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarBackground: {
    height: 8,
    backgroundColor: '#F1F3F5',
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: Colors.light.blue,
    borderRadius: 4,
  },
});
