import React,{useState} from 'react';
import { StyleSheet, StatusBar, View, Button, Text, TextInput, ImageBackground } from 'react-native';

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
        // paddingTop: 10,
        // backgroundColor: '#9bbbc2',
    },

    input: {
        padding: 20,
        paddingLeft: 20,
        marginBottom: 30,
        height: 40,
        borderWidth: 1,
        borderColor: '#69585f',
        borderRadius: 15,
    },
})

const Home = ({navigation, route}) => {
  const[username,setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[phone, setPhone] = useState("");

  return (
    <ImageBackground
    style={styles.background}
    source={{uri: "https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg"}}>

    <View style={styles.container}>
        <Text style={styles.title}>Registration</Text>
      <StatusBar/>
      {/* <Text style={styles.label}>Username</Text> */}
      <TextInput 
      style={styles.input}
        placeholder="Username"
      onChangeText={(text)=>setUsername(text)}/>

      <TextInput
      style={styles.input}
      placeholder="Email"
      onChangeText={(text)=>setEmail(text)}/>

      <TextInput 
      style={styles.input}
      placeholder="Phone Number"
      onChangeText={(text)=>setPhone(text)}/>

      <Button title='Sign Up'
      color={'black'}
      onPress={()=>{
        const mydata = route.params?.datastr ? JSON.parse(route.params.datastr) : [];
          let item = { 
            name: username, 
            email: email, 
            phone: phone 
          };
          mydata.push(item);
          fetch("https://f8815c8762dc435cb817e9795e531700.api.mockbin.io/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": "helloworld"
              },
              body: JSON.stringify(mydata),
            }
          )

          .then((response) => {
            navigation.navigate("Welcome", {username: username});
          })
        }
      }
      />
    </View>
    </ImageBackground>
  );
};

export default Home;