import { StyleSheet, View } from 'react-native';
import { BarcodeReader } from '../components';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <BarcodeReader style={styles.barcode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barcode: {
    flex: 1,
    height: 300,
  },
});

export default MainScreen;

