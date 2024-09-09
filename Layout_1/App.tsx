import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const App = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={{flex:2, justifyContent:'center'}}>
        <View style={styles.circle}>
        </View>
      </View>

      <Text style={styles.title}>
        GROW YOUR BUSINESS
      </Text>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 20,
    borderColor: 'black',
    marginBottom: 20,

  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    padding: 10,
    flex:1
  },
  description: {
    fontSize: 14,
    fontWeight:"bold",
    textAlign: 'center',
    marginBottom: 20,
    padding: 50,
    flex:1
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '60%',
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 10,
    marginBottom:50
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;