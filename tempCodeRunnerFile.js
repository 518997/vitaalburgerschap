import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';


export default function ProfielPage() {
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [activityMinutes, setActivityMinutes] = useState('');
  const [calories, setCalories] = useState(null);
  const [daysToReachGoal, setDaysToReachGoal] = useState(null);

  const calculateRMR = () => {
    const w = parseFloat(weight) || 0;
    const h = parseFloat(height.replace(',','.')) || 0;
    const a = parseInt(age) || 0;

    if (sex.toLowerCase() === 'man') {
      if (a >= 18 && a <= 30) return 15.4 * w - 27 * h + 717;
      if (a > 30 && a <= 60) return 11.3 * w - 16 * h + 901;
      if (a > 60) return 8.8 * w + 1.128 * h - 1071;
    } else if (sex.toLowerCase() === 'vrouw') {
      if (a >= 18 && a <= 30) return 13.3 * w + 334 * h + 35;
      if (a > 30 && a <= 60) return 8.7 * w - 25 * h + 865;
      if (a > 60) return 9.2 * w + 637 * h - 302;
    }
    return 0;
  };

  const calculateCalories = () => {
    const rmr = calculateRMR();
    const w = parseFloat(weight) || 0;
    const dailyActivityCalories = (parseFloat(activityMinutes) / 60) * (5 * w); // Schatting: 5 kcal per minuut per kg

    setCalories(rmr + dailyActivityCalories);
  };

   const adjustCaloriesForGoal = () => {
     const currentWeight = parseFloat(weight.replace(',', '.')) || 0;
    const goalWeight = parseFloat(desiredWeight.replace(',', '.')) || 0;
    
    // Bereken het verschil in gewicht tussen het huidige gewicht en het doelgewicht.
    const weightDifference = currentWeight - goalWeight;

     // Gewichtsverlies per dag bij een tekort van 1000 kcal per dag.
    const dailyWeightLoss = 1 / 7;  // 1 kg per week
    // Bereken het aantal dagen dat nodig is om het gewenste gewicht te bereiken.
    const daysToReachGoal = weightDifference / dailyWeightLoss;

    return Math.ceil(daysToReachGoal);
  };

  const handleCalculate = () => {
    calculateCalories();
    const days = adjustCaloriesForGoal();
    setDaysToReachGoal(days);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Vul je gegevens in!</Text>
      <TextInput
        style={styles.input}
        placeholder="Geslacht (man/vrouw)"
        value={sex}
        onChangeText={setSex}
      />
      <TextInput
        style={styles.input}
        placeholder="Leeftijd"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Lengte (m)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Huidig Gewicht (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gewenst Gewicht (kg)"
        value={desiredWeight}
        onChangeText={setDesiredWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Dagelijkse Bewegingsactiviteiten (minuten)"
        value={activityMinutes}
        onChangeText={setActivityMinutes}
        keyboardType="numeric"
      />
      <Button title="Bereken Calorieën" onPress={calculateCalories} />
      {calories != null && (
        <>
          <Text style={styles.result}>Dagelijkse caloriebehoefte: {calculateRMR().toFixed(2)} kcal</Text>
          <Text style={styles.result}>Dagen om gewenst gewicht te bereiken: {adjustCaloriesForGoal()}</Text>
        </>
      )}

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    top: 20,
    fontSize: 24,
    marginTop: 0,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 35,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 19,
    marginVertical: 20,
    color: 'red',
  },
});


