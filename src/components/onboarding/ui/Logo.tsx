import { View, Image, StyleSheet, ViewStyle } from 'react-native';
import LogoApp from '@/src/constants/image/logo.png';
import Colors from '@/src/constants/Colors';

interface Props {
  style?: ViewStyle;
}

export const Logo = ({ style }: Props) => (
  <View style={[styles.imageContainer, style]}>
    <Image source={LogoApp} style={[styles.image]} />
  </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    width: 160,
    height: 160,
    borderRadius: 25,
    backgroundColor: Colors.light.black,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
});
