import { TabContainer } from '@/src/components/tabs/TabContainer';
import { StyleSheet, Text, View } from 'react-native';

export default function TrainingPage() {
  return (
    <TabContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Training Schedule</Text>
      </View>
    </TabContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
