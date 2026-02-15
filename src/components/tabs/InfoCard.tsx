import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '@/src/constants/Colors';
import { useUserProfile } from '@/src/context/UserContext';

export const InfoCard = () => {
  const { profile } = useUserProfile();
  if (!profile) return null;

  return (
    <View style={styles.infoCard}>
      <Text style={styles.infoTitle}>Your Stats</Text>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Weight</Text>
        <Text style={styles.infoValue}>{profile.weight} kg</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Height</Text>
        <Text style={styles.infoValue}>{profile.height} cm</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Age</Text>
        <Text style={styles.infoValue}>{profile.age} yrs</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoCard: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    backgroundColor: Colors.light.white,
    borderColor: Colors.light.blue,
    borderWidth: 1.5,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.light.black,
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },

  infoLabel: {
    color: Colors.light.gray,
    fontSize: 15,
  },
  infoValue: {
    color: Colors.light.heavyBlue,
    fontWeight: '600',
    fontSize: 15,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.light.lightBlue,
    width: '100%',
  },
});
