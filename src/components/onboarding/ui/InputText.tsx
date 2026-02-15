import React from 'react';
import { TextInput, StyleSheet, View, KeyboardTypeOptions, Text, ViewStyle } from 'react-native';
import Colors from '@/src/constants/Colors';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  unit?: string;
}

export const Input = ({ value, onChangeText, placeholder, keyboardType = 'default', unit }: Props) => {
  const isNumeric = unit ? true : false;

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, { textAlign: isNumeric ? 'right' : 'center' }]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.light.blue}
          keyboardType={keyboardType}
          selectionColor={Colors.light.blue}
        />
        {unit && value.length > 0 && <Text style={styles.unitText}>{' ' + unit}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.lightBlue,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: Colors.light.black,
    paddingHorizontal: 20,
    width: '100%',
  },
  input: {
    fontSize: 22,
    fontWeight: '600',
    paddingVertical: 18,
    color: Colors.light.blue,
    minWidth: 60,
  },
  unitText: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.light.blue,
    width: 40,
  },
});
