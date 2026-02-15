import { StyleSheet, Text, View } from 'react-native';
import { useUserProfile } from '@/src/context/UserContext';
import { TabContainer } from '@/src/components/tabs/TabContainer';
import { StepTitle } from '@/src/components/onboarding/ui/Title';
import { Strings } from '@/src/constants/Strings';
import { CaloriesCard } from '@/src/components/tabs/CaloriesCard';
import { InfoCard } from '@/src/components/tabs/InfoCard';

export default function TabOneScreen() {
  const { profile } = useUserProfile();
  if (!profile) {
    return (
      <View>
        <Text>Loading data...</Text>
      </View>
    );
  }

  return (
    <TabContainer>
      <StepTitle style={styles.welcomeText}>{Strings.tabs.welcomeText + ' ' + profile.name + '!'}</StepTitle>
      <CaloriesCard />
      <InfoCard />
    </TabContainer>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'left',
    marginTop: 0,
  },
});
