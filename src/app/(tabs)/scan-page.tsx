import { TabContainer } from '@/src/components/tabs/TabContainer';
import { StyleSheet, Text, View } from 'react-native';

export default function ScanPage() {
  return (
    <TabContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Scan</Text>
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
