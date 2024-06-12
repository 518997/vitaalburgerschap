import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import ProfielPage from './profiel'; 
import PlanPage from './plan';  



const Stack = createNativeStackNavigator();

function checkCredentials(username, password) {
  if (username == 'rana.mardikhi@gmail.com' && password == 'vista898') {
    return true;
  }
  return false;
}

function LoginPage({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Voeg hier de inlogfunctionaliteit toe
    console.log('Username:', username);
    console.log('Password:', password);
    if (checkCredentials(username, password) == true) {
      navigation.navigate('Profiel');
    }
   
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Icon pressed')} style={styles.iconContainer}>
        <View style={styles.iconStack}>
          <Ionicons name={'heart'} size={100} color={'red'} />
          <Ionicons name={'heart'} size={50} color={'white'} style={styles.innerIcon} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>Vitaal Burgerschap</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="Profiel" component={ProfielPage} />
         <Stack.Screen name="Plan" component={PlanPage} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    top: -150,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 1, // Ruimte tussen het pictogram en de tekst
  },
  iconContainer: {
    marginBottom: 1, // Ruimte tussen het pictogram en de bovenkant van het scherm
  },
  iconStack: {
    position: 'relative',
    width: 100,
    height: 100,
  },
  innerIcon: {
    position: 'absolute',
    top: 25,
    left: 25,
  },
  input: {
    top: 10,
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
