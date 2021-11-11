import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarcodeScanner} from 'expo-barcode-scanner'
export default class Transaction extends React.Component {
    constructor(){
        super()
        this.state= {
            hasCameraPermission:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }
    getCameraPermissions = async() =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermission:status==='granted',
            buttonState:'clicked',
            scanned:false
        })
    }
    handleBarcodeScanned = async({type,data})=>{
        this.setState({
            scanned:true,
            scannedData:data,
            buttonState:'normal'
        })
    }
  render(){
      const hasCameraPermission = this.state.hasCameraPermission
      const scanned = this.state.scanned
      const buttonstate = this.state.buttonState
  return (
    <View style={styles.container}>
  <Text>Transaction Screen</Text>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
