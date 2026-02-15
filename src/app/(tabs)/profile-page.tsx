import { TabContainer } from '@/src/components/tabs/TabContainer';
import Colors from '@/src/constants/Colors';
import { useUserProfile } from '@/src/context/UserContext';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfilePage() {
  const { setProfile } = useUserProfile();

  const handleResetData = () => {
    Alert.alert('Delete data', 'Are you sure you want to delete all data and start over?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => setProfile(null),
      },
    ]);
  };

  return (
    <TabContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>

        <TouchableOpacity style={styles.resetButton} onPress={handleResetData}>
          <Text style={styles.resetButtonText}>Reset Data</Text>
        </TouchableOpacity>
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

  resetButton: {
    alignItems: 'center',
    padding: 20,
  },
  resetButtonText: {
    color: '#FF5252',
    fontWeight: '600',
    fontSize: 14,
    borderWidth: 1.5,
    borderColor: Colors.light.black,
    borderRadius: 25,
    padding: 10,
    marginTop: 50,
  },
});
