import React from 'react';
import { View , StyleSheet , Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.head}>
        <Text style={styles.name}>DWVL</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    head:{
        alignItems:'center',
        justifyContent:'center',
        width:480,
        height:144,
        backgroundColor:'#66cc33',
        marginBottom:24,
      },
      name:{
        fontFamily:'Ubuntu_700Bold',
        fontSize:30,
        color:'white',
        fontWeight:'bold',
      },
})

export default Header;