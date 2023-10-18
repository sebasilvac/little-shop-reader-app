import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Camera, CameraType } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";

const BarcodeReader = (props: any) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [barcode, setBarcode] = useState<null | string>(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  useEffect(() => {
    if(barcode) {
      //alert(`Barcode: ${barcode}`);
    };

    console.log(`Barcode: ${barcode}`)
  }, [barcode]);

  useEffect(() => {
    console.log(`scanned:`, scanned)
  }, [scanned]);

  const handleBarCodeScanned = ({ type, data }: any) => {

    console.log('....scanned', data)
    setScanned(true);
    setBarcode(() => data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const scanAgain = () => {
    setScanned(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerCamera}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.camera}
        />
      </View>

      {scanned && 
        <View style={styles.buttonContainer}>
          <Button title={'Tap to Scan Again'} onPress={scanAgain} />
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  containerCamera: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  camera: {
    flex: 1,
    backgroundColor: 'red',
    height: 250,
    marginTop: 20,
    borderRadius: 20/2,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "red",
    marginEnd: 10,
    textAlign: "center",
  },
});

export default BarcodeReader;
