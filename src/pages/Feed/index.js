import React from 'react';
import { View,Text , StyleSheet  , ScrollView, Image } from 'react-native';

import Header from '../../Components/Header'

const Feed = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
            <Header/>
            <View style={styles.boxHome}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <View>
                    <Text style={styles.title}>Fazenda Nova</Text>
                    <Text style={styles.description}>Produção Atual : Rapadura</Text>
                </View>    
            </View>
            <Image style={styles.product}
                   source={{
                       uri: 'https://melhorcomsaude.com.br/wp-content/uploads/2013/09/beneficios-do-abacaxi-1.jpg'
                   }} 
            />
            <View style={styles.observer}>
                <Text style={styles.observerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies est et eros mattis lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ut suscipit mi. Morbi sed commodo mauris. Mauris vel dictum quam. Nam in lectus id leo luctus mattis vel dictum eros. Nulla in tristique justo. Vestibulum cursus ex sed vehicula lacinia. Praesent nec dapibus ex. In vitae neque malesuada orci ultricies pretium eu at purus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies est et eros mattis lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ut suscipit mi. Morbi sed commodo mauris. Mauris vel dictum quam. Nam in lectus id leo luctus mattis vel dictum eros. Nulla in tristique justo. Vestibulum cursus ex sed vehicula lacinia. Praesent nec dapibus ex. In vitae neque malesuada orci ultricies pretium eu at purus.
                </Text>
            </View>
        </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    title:{
        marginLeft: 24,
        fontSize: 24,
        flexDirection:'row'
    },
    description:{
        marginLeft: 24,
    },
    boxHome:{
        flexDirection:'row'
    },
    tinyLogo: {
        width: 75,
        height: 75,
        borderRadius: 50,
    },
    product:{
        marginTop:20,
        width: 420,
        height: 360,
        borderRadius: 10,
    },
    observer:{
        marginTop:12,
        width:360,
    },
    observerText:{
        fontSize:12
    },
  
    
})
export default Feed;