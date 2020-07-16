import React from 'react';
import { View,TextInput , StyleSheet } from 'react-native';


// import { Container } from './styles';

const Input = (props) => {
    return (
        <View>
            <TextInput
                placeholder={props.name}
                style={styles.registerInput} />
        </View>
    );
}

const styles = StyleSheet.create({
    registerInput:{
        marginTop:24,
        borderRadius:8,
        width:290,
        height:52,
        backgroundColor:'#FBEEFF',
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        lineHeight:20,
        color:'#99879D'
    },
})

export default Input;