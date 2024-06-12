
import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

const img1 = require('./images/img1.jpg');

export default function PlanPage() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Activiteiten om Vet te Verbranden!</Text>
      <Text style={styles.toelichting}>Afvallen is een doel dat veel mensen voor ogen hebben. Dat is makkelijker gezegd dan gedaan. Het vet verbranden dat je lichaam heeft opgeslagen, vergt vastberadenheid en discipline. Naast een gezond eetpatroon en regelmatige beweging natuurlijk. Veel mensen denken dat één van de laatste twee al voldoende is, maar dat is zeker niet waar. Om vet te verbranden, moet je zweten, veel zweten. Aerobics en andere oefeningen waarvan je hartslag omhoog gaat, zijn goed. Krachttraining door gewichtheffen en oefeningen met elastieken werken ook. Met het opbouwen van spieren verbrand je meer calorieën dan vet. Om vet te verbranden, kan je niet slechts een deel van het lichaam trainen: je moet je hele lichaam trainen om te zorgen dat het vet verdwijnt. Dat kan als een hele opgave gezien worden, je weet niet meer waar je moet beginnen. Gelukkig hebben wij hieronder een lijst opgesteld met activiteiten die je kan doen om vet te verbranden.
        *Vergeet niet om 15-20 min te stretchen voor het sporten*</Text>
      
      <Image source={img1} style={styles.image} />
      <Text style={styles.img1title}>Opdrukken</Text>
      <Text style={styles.img1tekst}>Één van de meest onderschatte oefeningen en vaak verkeerd uitgevoerd. Opdrukken is een weerstandstraining waarbij je je eigen lichaamsgewicht gebruikt. Ga met gestrekte armen en benen op handen en voeten op de grond liggen, met je handpalmen net iets verder uit elkaar dan je schouders.  Laat jezelf zakken totdat je kin de vloer raakt en duw je lichaam daarna weer omhoog. Houd je rug recht en je ellebogen mogen niet op slot zitten. Als je het goed doet, voel je het in je buik, bovenarmen en je rug.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    top: 20,
    fontWeight: 'bold',
    marginLeft: 50,
    color: 'red',
  },
  toelichting: {
  top: 30,
  fontSize: 15,
  marginLeft: 10,
  marginRight: 10,
  lineHeight: 23,
  },
  image: {
  top: 60,
  margin: 'auto', 
  width: 350,
  height: 350,
  },
  img1title: {
    color: 'red',
    top: 70,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  img1tekst: {
    top: 80,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 23,
  },
});
