import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const App = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <LinearGradient colors={["#c8f4f6", "#e5f5f6", "#47d9f8"]} locations={[0, 0.9, 1]} style={[styles.container, { width, height }]}>
      <View style={{ flex: 2, justifyContent: 'center', paddingTop:40 }}>
        <View style={styles.circle}>
        </View>
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>
          GROW
        </Text>
        <Text style={styles.title}>
          YOUR BUSINESS
        </Text>
      </View>

      <Text style={styles.description}>
        We will help you to grow your business using online server
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}> HOW WE WORK?</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 10,
    borderColor: 'black',
    marginBottom: 20,

  },
  viewTitle:{
    marginBottom:10,
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 10,
    padding: 20,
    justifyContent: 'center',
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    gap: 50
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30,
    width: 150,
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer:{
    flex: 1,
    justifyContent: 'flex-start',
    
  },
  textFooter:{
      fontWeight: 'bold',
      fontSize: 20,
  }
});

export default App;
