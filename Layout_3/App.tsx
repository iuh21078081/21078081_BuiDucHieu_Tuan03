import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather';
export default function App() {
  const { width, height } = Dimensions.get('window');
  return (

    <LinearGradient colors={["#c8f4f6", "#e5f5f6", "#47d9f8"]} locations={[0, 0.9, 1]} style={[styles.container, { width, height }]} >
      <View style={{ marginTop: 100, flex: 2 }}>
        <Fontisto name="locked" size={110} color="black" />
      </View>
      <View style={styles.titleScreen}>
        <Text style={[styles.textTitle, { textAlign: 'center' }]}>FORGET</Text>
        <Text style={styles.textTitle}>PASSWORD</Text>
      </View>
      <View style={styles.descriptionScreen}>
        <Text style={styles.textDescription}>Provide your account's email for which you</Text>
        <Text style={[styles.textDescription, { textAlign: 'center' }]}>want to reset your password</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.row}>
          <Feather name="mail" size={24} color="black" />
          <Text>Email</Text>
          <TextInput style={styles.emailInput} clearTextOnFocus={true} />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonNext}>
        <View style={styles.customButton} >
          <Text style={{fontSize:18, fontWeight:'700'}}>NEXT</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleScreen: {
    // flex: 1,
    marginBottom: 40,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: '700'
  },
  textDescription: {
    fontSize: 15,
    fontWeight: '700'
  },
  descriptionScreen: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    backgroundColor: "#C4C4C4",
    width: 300,
    height: 45,
    padding: 10,
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between'
  },
  emailInput: {
    flex: 1,
    height: 40,
  },
  buttonNext:{
    flex:2,
  },
  customButton:{
    backgroundColor:"#E3C000",
    width: 300,
    height: 45,
    alignItems:'center',
    justifyContent:"center"
    
  }
});
