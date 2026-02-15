import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import Colors from '@/src/constants/Colors';

interface Props {
  label: string;
  isSelected: boolean;
  onSelect: () => void;
  style?: ViewStyle;
  desc?: string;
}

export const Card = ({ label, isSelected, onSelect, desc, style }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onSelect} style={[styles.card, isSelected && styles.selectedCard, style]}>
      <Text style={[styles.cardText, isSelected && styles.selectedText]}>{label}</Text>
      {desc && <Text style={[styles.descText, isSelected && styles.selectedDescText]}>{desc}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.lightBlue,
    padding: 25,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: Colors.light.black,
    alignItems: 'center',
  },

  selectedCard: {
    borderColor: Colors.light.blue,
    backgroundColor: Colors.light.heavyBlue,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.blue,
    textAlign: 'center',
  },
  selectedText: {
    color: Colors.light.blue,
  },
  descText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  selectedDescText: {
    color: Colors.light.blue,
    opacity: 0.8,
  },
});
