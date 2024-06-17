
import React from 'react';
import { StyleSheet, Text, ScrollView, Image, Button } from 'react-native';



const img1 = require('./images/img1.jpg');
const img2 = require('./images/img2.jpg');
const img3 = require('./images/img3.jpg');
const img4 = require('./images/img4.jpg');


export default function PlanPage() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Activiteiten om Vet te Verbranden!</Text>
      <Text style={styles.toelichting}>Afvallen is een doel dat veel mensen voor ogen hebben. Dat is makkelijker gezegd dan gedaan. Het vet verbranden dat je lichaam heeft opgeslagen, vergt vastberadenheid en discipline. Naast een gezond eetpatroon en regelmatige beweging natuurlijk. Veel mensen denken dat één van de laatste twee al voldoende is, maar dat is zeker niet waar. Om vet te verbranden, moet je zweten, veel zweten. Aerobics en andere oefeningen waarvan je hartslag omhoog gaat, zijn goed. Krachttraining door gewichtheffen en oefeningen met elastieken werken ook. Met het opbouwen van spieren verbrand je meer calorieën dan vet. Om vet te verbranden, kan je niet slechts een deel van het lichaam trainen: je moet je hele lichaam trainen om te zorgen dat het vet verdwijnt. Dat kan als een hele opgave gezien worden, je weet niet meer waar je moet beginnen. Gelukkig hebben wij hieronder een lijst opgesteld met activiteiten die je kan doen om vet te verbranden.
        *Vergeet niet om 15-20 min te stretchen voor het sporten*</Text>
      
      <Image source={img1} style={styles.image} />
      <Text style={styles.img1title}>Opdrukken</Text>
      <Text style={styles.img1tekst}>Één van de meest onderschatte oefeningen en vaak verkeerd uitgevoerd. Opdrukken is een weerstandstraining waarbij je je eigen lichaamsgewicht gebruikt. Ga met gestrekte armen en benen op handen en voeten op de grond liggen, met je handpalmen net iets verder uit elkaar dan je schouders.  Laat jezelf zakken totdat je kin de vloer raakt en duw je lichaam daarna weer omhoog. Houd je rug recht en je ellebogen mogen niet op slot zitten. Als je het goed doet, voel je het in je buik, bovenarmen en je rug.</Text>
      <Image source={img2} style={styles.image2} />
      <Text style={styles.img2title}>Brug tegenovergesteld met arm en been</Text>
      <Text style={styles.img2tekst}>Ga op je rug liggen met je linkerknie gebogen en je voet plat op de vloer. Je rechterbeen moet omhoog naar het plafond wijzen en je rechterarm ligt naast je lichaam. Reik ook met je linkerarm naar het plafond. Beweeg nu tegelijkertijd je rechterbeen naar rechts en je linkerarm naar links zonder je heupen of schouders te bewegen. Breng je arm en been terug naar het midden en richting het plafond</Text>
      <Image source={img3} style={styles.image3} />
      <Text style={styles.img3title}>Scale Pose</Text>
      <Text style={styles.img3tekst}>Ga comfortabel in kleermakerspositie zitten en leg je handen naast je heupen op de grond.
        Span je bekkenbodem aan (alsof je je plas moet ophouden), druk jezelf op je handen omhoog totdat je hele lichaam van de grond is. Houd deze positie 3 seconden vast en kom dan langzaam naar beneden. Zo train je je armen en buikspieren. Dit is wel een lastige oefening. Als het je niet lukt je hele lichaam omhoog te tillen: laat je voeten op de grond en breng alleen je billen omhoog.</Text>
      <Image source={img4} style={styles.image4} />
      <Text style={styles.img4title}>Touwtje springen</Text>
      <Text style={styles.img4tekst}>Door touwtje te springen gaat je hartslag omhoog. Het is heel simpel en je verbrandt veel calorieën. 15-20 minuten touwtje springen maakt de spieren in je armen en benen sterker, maar het is ook goed voor je hart (je hart is namelijk ook een spier).</Text>
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
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 40,
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
    top: 80,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  img1tekst: {
    top: 90,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 23,
  },
  image2: {
   top: 120,
   margin: 'auto', 
   width: 350,
   height: 350,
  },
  img2title: {
   color: 'red',
   top: 140,
   marginLeft: 20,
   fontWeight: 'bold',
  },
   img2tekst: {
    top: 150,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 23,
  },
  image3: {
   top: 150,
   margin: 'auto' , 
   width: 350,
   height: 350,
  },
  img3title: {
   color: 'red',
   top: 170,
   marginLeft: 20,
   fontWeight: 'bold',
  },
   img3tekst: {
    top: 180,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 23,
  },
   image4: {
    top: 200,
    margin: 'auto', 
    width: 350,
    height: 350,
  },
  img4title: {
   color: 'red',
   top: 220,
   marginLeft: 20,
   fontWeight: 'bold',
  },
   img4tekst: {
    top: 230,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 23,
    marginBottom: 250,
  },
});
