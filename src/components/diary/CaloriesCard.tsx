import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '@/src/constants/Colors';
import { useAppSelector } from '@/src/hooks/reduxHooks';
import { selectUserProfile } from '@/src/features/user/userSlice';
import { Strings } from '@/src/constants/Strings';
import { ProgressBar } from '../ui/ProgressBar';
import { selectTodayCalories } from '@/src/features/nutrition/nutritionSlice';
import { selectTodayMacros } from '@/src/features/nutrition/nutritionSlice';

export const CaloriesCard = () => {
  const profile = useAppSelector(selectUserProfile);
  const totalCalories = useAppSelector(selectTodayCalories);
  const totalMacros = useAppSelector(selectTodayMacros);

  if (!profile) return null;

  return (
    <View>
      <View style={styles.caloriesCard}>
        <Text style={styles.cardLabel}>{Strings.tabs.goal}</Text>
        <Text style={styles.caloriesValue}>{profile.dailyCalories + ' kcal'}</Text>
        <Text style={styles.caloriesConsumed}>
          {totalCalories} / {profile.dailyCalories} kcal
        </Text>
        <ProgressBar current={totalCalories} total={profile.dailyCalories} />
      </View>

      <View style={styles.macrosContainer}>
        <View style={styles.macroBox}>
          <Text style={styles.macroLabel}>Protein</Text>
          <Text style={styles.macroValue}>{profile.macros.proteins + 'g'}</Text>
          <Text style={styles.caloriesConsumed}>
            {totalMacros.proteins} / {profile.macros.proteins} g
          </Text>
          <ProgressBar current={totalMacros.proteins} total={profile.macros.proteins} />
        </View>

        <View style={styles.macroBox}>
          <Text style={styles.macroLabel}>Carbs</Text>
          <Text style={styles.macroValue}>{profile.macros.carbs + 'g'}</Text>
          <Text style={styles.caloriesConsumed}>
            {totalMacros.carbs} / {profile.macros.carbs} g
          </Text>
          <ProgressBar current={totalMacros.carbs} total={profile.macros.carbs} />
        </View>

        <View style={styles.macroBox}>
          <Text style={styles.macroLabel}>Fats</Text>
          <Text style={styles.macroValue}>{profile.macros.fats + 'g'}</Text>
          <Text style={styles.caloriesConsumed}>
            {totalMacros.fats} / {profile.macros.fats} g
          </Text>
          <ProgressBar current={totalMacros.fats} total={profile.macros.fats} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  caloriesCard: {
    backgroundColor: Colors.light.lightBlue,
    borderColor: Colors.light.blue,
    borderWidth: 1.5,
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: Colors.light.blue,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
    marginBottom: 20,
    marginTop: 0,
  },
  caloriesConsumed: {
    fontSize: 14,
    color: Colors.light.heavyBlue,
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 17,
    color: Colors.light.heavyBlue,
    fontWeight: '800',
  },
  caloriesValue: {
    fontSize: 38,
    fontWeight: '800',
    color: Colors.light.heavyBlue,
    marginVertical: 8,
  },
  macrosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  macroBox: {
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: Colors.light.lightBlue,
    borderColor: Colors.light.blue,
    borderWidth: 1.5,
    justifyContent: 'center',
  },
  macroLabel: {
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    marginBottom: 4,
    color: Colors.light.heavyBlue,
  },
  macroValue: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.light.heavyBlue,
  },
});
