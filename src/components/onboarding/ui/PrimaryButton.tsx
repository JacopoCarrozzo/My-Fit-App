import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/src/constants/Colors';

interface Props {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

export const PrimaryButton = ({ text, onPress, disabled, style }: Props) => {
  return (
    <View style={[styles.footer, style]}>
      <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.8}>
        <LinearGradient
          colors={disabled ? Colors.light.primaryGradient : Colors.light.primaryGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <View>
            <Text style={styles.buttonText}>{text}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 'auto',
    paddingBottom: 20,
  },
  button: {
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.light.white,
    fontSize: 18,
    fontWeight: '700',
  },
});
