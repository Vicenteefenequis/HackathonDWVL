import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import {RectButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native';
import Header from '../../Components/Header'
export default function App() {
  const navigation = useNavigation();
  function handleNavigateToProdutor(){
    navigation.navigate('Producer')
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.medium}>
        <RectButton style={styles.button} onPress={handleNavigateToProdutor}>
            <Text style={styles.buttonText}>Produtor</Text>
        </RectButton>
        <RectButton style={styles.button} >
            <Text style={styles.buttonText}>Comprador</Text>
        </RectButton>
        <RectButton style={styles.button} >
            <Text style={styles.buttonText}>Transporte</Text>
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  medium:{
    flex:1,
    justifyContent:'center'
  },

  button: {
    marginBottom:12,
    backgroundColor: '#34CB79',
    width:250,
    height: 80,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 8,
    padding:12,
    
  },
  buttonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 30,
  }
});
