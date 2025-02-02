import React,{useState} from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: 'center',
        padding: 25,
    },

    title: {
        fontFamily: 'fantasy',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 30,
    }
})

const Welcome = ({navigation, route}) => {
    const[username, setUsername] = useState(route.params.username);
    
  return (
    <ImageBackground
    style={styles.background}
    source={{uri: "https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg"}}>
        <View>
        <Text style={styles.title}>Welcome {username}!</Text>
        </View>
    </ImageBackground>
  );
};

export default Welcome;