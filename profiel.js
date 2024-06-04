import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function ProfielPage() {
    const [sex, setSex] = useState('');
    const [leeftijd, setLeeftijd] = useState('');
    const [lengte, setLengte] = useState('');
    const [HuidigGewicht, setHuidigGewicht] = useState('');
    const [GewenstGewicht, setGewenstGewicht] = useState('');
    const [Voeding, setDagelijksVoedingsdagboekt] = useState('');
     const [Beweging, setDagelijkseBewegingsactiviteitent] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vul je gegevens in!</Text>
      <TextInput
        style={styles.input}
        placeholder="Geslacht"
        value={sex}
        onChangeText={setSex}
          />
        <TextInput
        style={styles.input}
        placeholder="Leeftijd"
        value={leeftijd}
        onChangeText={setLeeftijd}
          />
        <TextInput
        style={styles.input}
        placeholder="Lengte"
        value={lengte}
        onChangeText={setLengte}
         />
       <TextInput
        style={styles.input}
        placeholder="Huidig Gewicht"
        value={HuidigGewicht}
        onChangeText={setHuidigGewicht}
         />
          <TextInput
        style={styles.input}
        placeholder="Gewenst Gewicht"
        value={GewenstGewicht}
        onChangeText={setGewenstGewicht}
          />
        <TextInput
        style={styles.input}
        placeholder="Dagelijks Voedingsdagboek"
        value={Voeding}
        onChangeText={setDagelijksVoedingsdagboekt}
         />
         <TextInput
        style={styles.input}
        placeholder="Dagelijkse Bewegingsactiviteiten"
        value={Beweging}
        onChangeText={setDagelijkseBewegingsactiviteitent}
         />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: -370, // Ruimte tussen het pictogram en de tekst
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
});