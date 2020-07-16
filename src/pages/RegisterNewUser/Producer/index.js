import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import {RectButton} from 'react-native-gesture-handler'
import Header from '../../../Components/Header'
import Input from '../../../Components/Input'


const Producer = () => {
  return (
      <View style={styles.container}>
          <Header />
          <View style={styles.register}>
              <Text style={styles.registerText}>Sign-UP</Text>
              <View style={styles.registerDiv}>
                <Input name="First Name" />
                <Input name="Last Name" />
                <Input name="Email" />
                <Input name="Password" />
              </View>
          </View>
          <RectButton style={styles.buttonRegister}>
              <Text style={styles.buttonRegisterText}>Sign-UP</Text>
          </RectButton>
          <View style={styles.registerAccount}>
            <Text style={styles.registerTextAccount}>You have an account ? </Text>
            <RectButton>
                <Text style={styles.registerLogin}>Log-in</Text>
            </RectButton>
          </View>
      </View>
  )
  ;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    
    register:{
        marginTop:50,
        width:340,
        height:400,
        borderStyle:'dashed',
        borderRadius:5,
        borderWidth:0.2,
        backgroundColor:'rgba(255,255,255,0.2)',
        borderColor:'#34CB79'
    },
    registerText:{
        textAlign:'center',
        marginTop:24,
        fontWeight:'bold',
        fontSize:24
    },
    registerDiv:{

        justifyContent:'center',
        alignItems:'center',
       
    },

    buttonRegister:{
        marginTop:100,
        backgroundColor:'#9378FF',
        borderRadius:60,
        width:240,
        height:50,
    },
    buttonRegisterText:{
        textAlign:'center',
        justifyContent:"center",
        alignItems:'center',
        marginTop:15,
        color:'#fff',
        fontWeight:'bold',
        fontSize:14,
    },
    registerAccount:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    },
    registerLogin:{
        marginTop:40,
        fontWeight:'bold'
    },
    registerTextAccount:{
        marginTop:40,
    }
})
export default Producer;