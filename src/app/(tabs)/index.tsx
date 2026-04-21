import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DismissKeyboardView } from '@/src/components/ui/DismissKeyboardView';
import { StepTitle } from '@/src/components/onboarding/ui/Title';
import { Strings } from '@/src/constants/Strings';
import { CaloriesCard } from '@/src/components/diary/CaloriesCard';
import { useAppSelector } from '@/src/hooks/reduxHooks';

export default function TabOneScreen() {
  const name = useAppSelector((state) => state.user.stats?.name);
  console.log('name: ', name);

  return (
    <SafeAreaView style={styles.safeArea}>
      <DismissKeyboardView>
        <View style={styles.container}>
          <StepTitle style={styles.welcomeText}>{Strings.tabs.welcomeText + ' ' + name + '!'}</StepTitle>
          <CaloriesCard />
        </View>
      </DismissKeyboardView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'left',
    marginTop: 0,
  },
});
